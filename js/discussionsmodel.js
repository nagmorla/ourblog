
function TopicDetails() {
    var self = this;
    self.topics = ko.observableArray([]);
    self.details = ko.observableArray([]);
    self.tmpdetails = [];
    self.topic_id = ko.observable();
    self.maxDescussionId = 1;
    self.addTopic = function (topic) {
        self.topics.removeAll();
        self.details.removeAll();
        self.topics.push(topic);
        var tid = topic.topic_id;
        self.topic_id(tid);
        self.tmpdetails = [];
        detailsDataPrepared = false;
        pullRealDetails(tid);
        discussionLoadIntervalObject = window.setInterval(pullRealDetails.bind(null, tid), discussion_load_interval);
//        verifyDetailsLoaded(self);
    };

    self.descussionMarked = function (data, event) {
        var checkboxId = event.currentTarget.id;
        console.log('Checkbox clicked...' + checkboxId);
        event.stopPropagation();
        var checkbox = document.getElementById(checkboxId);
        console.log('Checked Val ::' + checkbox.checked);
        console.log('Checked Val ::' + event.currentTarget.value);
    };

    self.submitReply = function () {
        var replyContent = tinyMCE.get('topic_detail_feedback').getContent();
        var type = document.getElementById('des_type').value;
        console.log(JSON.stringify(replyContent) + ', Type:' + type);
        tinyMCE.get('topic_detail_feedback').setContent('');
        var loginUser = document.getElementById('login_user').value;
        var detail;
        var date = new Date();
        var month = date.getMonth() + 1;
        var mon = month.toString();
        if (mon.length == 1) {
            mon = '0' + mon;
        }
        var day = (date.getDate()).toString();
        if (day.length == 1) {
            day = '0' + day;
        }
//        detail = {'discussion_id': self.maxDescussionId, 'topic_id': self.topic_id(), 'type': type.toUpperCase(),
//            'written_by': loginUser, 'discussion_ref_id': _replyDiscussionId,
//            'details': replyContent,
//            'marked_by_admin': '0', 'discussion_date': (date.getFullYear() + '-' + mon + '-' + day)
//            , innerDetails: []};
//        self.details.push(detail);

        detail = {'topic_id': self.topic_id(), 'type': type.toUpperCase(),
            'created_by': encodeURIComponent(loginUser), 'discussion_ref_id': _replyDiscussionId,
            'details': encodeURIComponent(replyContent),
            'marked_by_admin': '0'};
        $.post(POST_DISCUSSION_URL, 'myData=' + JSON.stringify(detail), function (data) {
            console.log('Discussion posted to server. ' + JSON.stringify(data));
            alert('Discussion posted successfully');
        }).fail(function (data) {
            console.error('Failed to post discussion to server.');
        });
    };


    self.rearrangeDetails = function (details) {
//        console.log('Re-Arranging Details...' + JSON.stringify(details));
        var childNodes = [];
        for (var i = 0; i < details.length; i++) {
            var det = details[i];
            if (det.discussion_ref_id == '' || det.discussion_ref_id == undefined || det.discussion_ref_id == null || det.discussion_ref_id == '0') {
                self.details.push(det);
            } else {
//                console.log('This is inner detail..' + JSON.stringify(det));
                childNodes.push(det);
            }
        }
        var parentArrayLen = self.details().length;
        console.log('Total Parents:' + parentArrayLen + ', Childs:' + childNodes.length);
        for (var i = 0; i < childNodes.length; i++) {
            var child = childNodes[i];
            for (var j = 0; j < parentArrayLen; j++) {
                var parent = self.details()[j];
//                console.log('Parent ID:' + parent.discussion_id + ', Child Ref ID:' + child.discussion_ref_id);
                if (parent.discussion_id == child.discussion_ref_id) {
                    parent.innerDetails.push(child);
//                    console.log('Pushed to parent:' + JSON.stringify(parent));
                    break;
                }
            }
        }
    };

}


function pullRealDetails(id) {
    topicDetailsModel.details.removeAll();
    pullDiscussions(id);
    verifyDetailsLoaded();
}

function pullDiscussions(id) {
    console.log('Pulling real details for topic ... ' + id);
    detailsDataPrepared = false;
    var URL = DISCUSSION_URL;
    URL = URL.replace(/{tid}/g, id);
    console.log('URL::' + URL);
    //replace(/&amp;/g, "&")
    topicDetailsModel.tmpdetails = [];
    $.getJSON(URL, function (data) {
        if (data == null || data == 'null') {
            console.error('Discussions are not defined for topic:' + id);
        } else {
            console.log('Discussions pulled from real target::' + data.length);
            var detail;
            $.each(data, function (index, value) {
                detail = {'discussion_id': value.discussion_id,
                    'topic_id': value.topic_id,
                    'type': value.type,
                    'written_by': value.created_by,
                    'discussion_ref_id': value.discussion_ref_id,
                    'details': myencode(value.details),
                    'marked_by_admin': value.marked_by_admin,
                    'discussion_date': value.creation_date
                    , innerDetails: []};
                topicDetailsModel.tmpdetails.push(detail);
//                    console.log('HTML encoded...'+myencode(value.details));
//                    console.log('HTML encoded...'+(value.details));
            });
        }
        detailsDataPrepared = true;
        console.log('Discussions in temp array:' + topicDetailsModel.tmpdetails.length);
//        applyTopicDetailsBinding();
//        loadTopicDetailsPage();
    });
}

function myCustomFileBrowser(field_name, url, type, win) {
    console.log('Image browsed...' + field_name + ', ' + url + ', ' + type + ', ' + win);
}
var topicDetailsModel = new TopicDetails();

var detailsDataPrepared = false;
function loadTopicDetailsPage() {
    $('#topic_details').load("topics_details.php", function (data) {
        console.log('Topics details page is loaded into page.');
        try {
            tinyMCE.execCommand('mceRemoveEditor', false, 'topic_detail_feedback');
            setTimeout(function () {
                tinymce.init({selector: '#topic_detail_feedback',
                    plugins: "image paste link imagetools",
                    height: 300,
                    toolbar: "bold italic underline link",
                    paste_data_images: true,
//                    menubar: ["file", "edit", "view", "insert"]
                    menubar: false
//                    ,toolbar1: "bold italic underline link"
//                    ,file_browser_callback: myCustomFileBrowser
                });
            }, 2000);


//            tinymce.init({selector: '#topic_detail_feedback',
//                plugins: "image",
//                menubar: ["file", "edit", "view", "insert"]
//            });
            console.log('TinyMCE is initialized for descussions');
        } catch (exp) {
            console.error("Couldn't initialize tiny mce editor for discussions. " + exp);
        }
        applyTopicDetailsBinding();
    });
}


//var discussionLoadtimer;
//function resetDiscussionLoadTimer() {
//    console.log('Topic Details are not yet loaded ......');
//    clearTimeout(discussionLoadtimer);
//    discussionLoadtimer = setTimeout(verifyDetailsLoaded, 2000);
//}

var topicDetailsTimer;

function verifyDetailsLoaded() {
    if (detailsDataPrepared == true) {
        topicDetailsModel.rearrangeDetails(topicDetailsModel.tmpdetails);
        loadTopicDetailsPage();
    } else {
        resetTopicsDetailsTimer();
    }
}

function resetTopicsDetailsTimer() {
    console.log('Topic Details are not yet loaded ......');
    clearTimeout(topicDetailsTimer);
    topicDetailsTimer = setTimeout(verifyDetailsLoaded, 2000);
}

function applyTopicDetailsBinding() {
    console.log('Applying Bindings to Topic Details');
    var topicDetDiv = document.getElementById('topic_details');
    ko.cleanNode(topicDetDiv);
    ko.applyBindings(topicDetailsModel, topicDetDiv);
    console.log('Bindings Applied to Topic Details');
}

descussionMarked = function (obj) {
    var checkboxId = obj.id;
    event.stopPropagation();
    var checkbox = document.getElementById(checkboxId);
    var marked_by_admin = '0';
    if (checkbox.checked == true) {
        console.log('Checked Val :: TRUE');
        marked_by_admin = '1';
    } else {
        console.log('Checked Val :: FALSE');
    }
    var postdata = JSON.parse('{}');
    postdata.discussion_id = checkboxId;
    postdata.marked_by_admin = marked_by_admin;
    $.post(MARK_DISCUSSION_URL, 'myData=' + JSON.stringify(postdata), function (data) {
        console.log('Marked by admin carried to server. ' + JSON.stringify(data));
    }).fail(function (data) {
        console.error('Failed to carry marked by admin.');
    });
};

var _replyDiscussionId = '';
discussionReplyLinkClicked = function (obj) {
    console.log('Discussion reply clicked ::' + obj.id);
    _replyDiscussionId = obj.id;
};

parentReplyLinkClicked = function (obj) {
    console.log('Parent reply clicked ::' + obj.id);
    _replyDiscussionId = '';
};


