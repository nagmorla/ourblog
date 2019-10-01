function HomeModel() {
    var self = this;
    self.topics = ko.observableArray([]);
    var topic = {'topic_id': '27', 'subject': 'Artificial Inteligence :: Robot is very dangorous',
        'content': 'A robot is a machine—especially one programmable by a computer— capable of carrying out a complex series of actions automatically. ',
        't_day': '12',
        't_mon': 'Sep',
        't_year': '2019'
    };
    self.topics.push(topic);

    topic = {'topic_id': '36', 'subject': 'Machine Learning:: Linear regression is difficult to understand',
        'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
        't_day': '13',
        't_mon': 'Sep',
        't_year': '2019'
    };
    self.topics.push(topic);

    self.gotoTopic = function (data) {
        $('#topic_details').show();
        $('#Home_Screen').hide();
        topicDetailsModel.addTopic(data);
    };
}

var topicsMainModel = new HomeModel();

$('#topics_column').load("topics_main.html", function (data) {
    console.log('Topics main page is loaded into page.');
    console.log('Applying Bindings to Home Screen');
    ko.applyBindings(topicsMainModel, document.getElementById('Home_Screen'));
    console.log('Bindings Applied to Home Screen');

});


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
        var currentDescId = self.pullDetails(topic.topic_id);
//        console.log('Temp Details ...' + JSON.stringify(self.tmpdetails));
        self.maxDescussionId = currentDescId + 1;
        console.log('currentDescId == ' + currentDescId);

//        $.getJSON('');
        verifyDetailsLoaded(self);
    };

    self.submitReply = function () {
        var replyContent = tinyMCE.get('topic_detail_feedback').getContent();
        console.log(JSON.stringify(replyContent));
        tinyMCE.get('topic_detail_feedback').setContent('');
        var detail;
        detail = {'discussion_id': self.maxDescussionId, 'topic_id': self.topic_id(), 'type': 'REPLY', 'written_by': 'Anonimous User', 'discussion_ref_id': '',
            'details': replyContent,
            'marked_by_admin': '0', 'discussion_date': '2019-09-17'};
        self.details.push(detail);
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
        detail = {'discussion_id': '2006', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Shankar Deva', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-23'
            , innerDetails: []};
        self.tmpdetails.push(detail);
        detail = {'discussion_id': '2007', 'topic_id': id, 'type': 'REPLY', 'written_by': 'Ayodhya Kumari', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '1', 'discussion_date': '2019-09-17'
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
                console.log('Parent ID:' + parent.discussion_id + ', Child Ref ID:' + child.discussion_ref_id);
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
    $('#topic_details').load("topics_details.html", function (data) {
        console.log('Topics details page is loaded into page.');
        applyTopicDetailsBinding();
    });
}
var timeOut;

function verifyDetailsLoaded(self) {
    if (detailsDataPrepared == true) {
        self.rearrangeDetails(self.tmpdetails);
        loadTopicDetailsPage();
    } else {
        resetTimer();
    }
}

function resetTimer() {
    console.log('Topic Details are not yet loaded ......');
    clearTimeout(timeOut);
    timeOut = setTimeout(verifyDetailsLoaded, 2000);
}

$('#_othercontrolls').load("othercontrols.html", function (data) {
    console.log('Other controlls also loaded into page.');
});

function applyTopicDetailsBinding() {
    console.log('Applying Bindings to Topic Details');
    var topicDetDiv = document.getElementById('topic_details');
    ko.cleanNode(topicDetDiv);
    ko.applyBindings(topicDetailsModel, topicDetDiv);
    console.log('Bindings Applied to Topic Details');
}