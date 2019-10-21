
function TopicDetails() {
    var self = this;
    self.topics = ko.observableArray([]);
    self.details = ko.observableArray([]);
    self.tmpdetails = [];
    self.topic_id = ko.observable();
    self.maxDescussionId = 1;

    self.addTopic = function (topic) {
        self.topics.removeAll();
        self.topics.push(topic);
        self.topic_id(topic.topic_id);
        self.tmpdetails = [];
        detailsDataPrepared = false;
//        var currentDescId = self.pullDetails(topic.topic_id);
//        self.maxDescussionId = currentDescId + 1;
//        console.log('currentDescId == ' + currentDescId);
        self.pullRealDetails(topic.topic_id);
        verifyDetailsLoaded(self);
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
        detail = {'discussion_id': self.maxDescussionId, 'topic_id': self.topic_id(), 'type': type.toUpperCase(),
            'written_by': loginUser, 'discussion_ref_id': _replyDiscussionId,
            'details': replyContent,
            'marked_by_admin': '0', 'discussion_date': (date.getFullYear() + '-' + mon + '-' + day)
            , innerDetails: []};
        self.details.push(detail);
//        $.post();
    };


    self.pullDetails = function (id) {
        console.log('Pulling details for topic ... ' + id);
        var detailsId = 0;
        var detail;
        detail = {'discussion_id': '2002', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Soumya Rathod', 'discussion_ref_id': '',
            'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.<br>Form controls automatically receive some global styling with Bootstrap: All textual &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; elements with class .form-control have a width of 100%.',
            'marked_by_admin': '0', 'discussion_date': '2019-09-17'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2003', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Mangulya Rathod', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-18'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2004', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Sarath Yadhav', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '1', 'discussion_date': '2019-09-19'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2005', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Chilboo Pandye', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-22'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2006', 'topic_id': id, 'type': 'QUESTION', 'written_by': 'Shankar Deva', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-23'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2007', 'topic_id': id, 'type': 'FEEDBACK', 'written_by': 'Ayodhya Kumari', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '1', 'discussion_date': '2019-09-17'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2008', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Soumya Rathod', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-20'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2009', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Shahanaz Keriz', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-17'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detailsId = detail.discussion_id;
        detail = {'discussion_id': '2010', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Nagaraj Patoudi', 'discussion_ref_id': '2002', 'details': 'Inner Details, This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-20'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2011', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Nagaraj Patoudi', 'discussion_ref_id': '2002', 'details': 'Inner Details, This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-17'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detailsDataPrepared = true;
        return detailsId;
    };

    self.pullRealDetails = function (id) {
        console.log('Pulling real details for topic ... ' + id);
        var URL = DISCUSSION_URL;
        URL = URL.replace(/{tid}/g, id);
        console.log('URL::' + URL);
        //replace(/&amp;/g, "&")
        $.getJSON(URL, function (data) {
            if (data == null || data == 'null') {
                console.error('Discussions are not defined for topic:' + id);
            } else {
                console.log('Discussions pulled from real target::' + data.length);
                var detail;
                $.each(data, function (index, value) {
                    detail = {'discussion_id': value.discussion_id, 'topic_id': value.topic_id, 'type': value.type, 'written_by': value.written_by, 'discussion_ref_id': value.discussion_ref_id, 'details': value.details, 'marked_by_admin': value.marked_by_admin, 'discussion_date': value.creation_date
                        , innerDetails: []};
                    self.tmpdetails.push(detail);
                });
            }
            detailsDataPrepared = true;
        });
    };

    self.rearrangeDetails = function (details) {
        console.log('Re-Arranging Details...');
        var childNodes = [];
        self.details.removeAll();
        for (var i = 0; i < details.length; i++) {
            var det = details[i];
            if (det.discussion_ref_id == '' || det.discussion_ref_id == undefined || det.discussion_ref_id == null) {
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

var topicDetailsModel = new TopicDetails();

var detailsDataPrepared = false;
function loadTopicDetailsPage() {
    $('#topic_details').load("topics_details.php", function (data) {
        console.log('Topics details page is loaded into page.');
        try {
            tinyMCE.execCommand('mceRemoveEditor', false, 'topic_detail_feedback');
            setTimeout(function () {
                tinymce.init({selector: '#topic_detail_feedback',
                    plugins: "image,paste",
                    height: 300,
                    toolbar: "image,paste",
                    paste_data_images: true,
                    menubar: ["file", "edit", "view", "insert"]
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

var topicDetailsTimer;

function verifyDetailsLoaded(self) {
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
    if (checkbox.checked == true) {
        console.log('Checked Val :: TRUE');
    } else {
        console.log('Checked Val :: FALSE');
    }
//    $.post(URL, data, function(data){});
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


