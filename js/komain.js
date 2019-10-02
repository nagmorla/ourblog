function HomeModel() {
    var self = this;
    self.masterTopics = [];
    self.topics = ko.observableArray([]);
    self.categories = ko.observableArray([]);

    self.pullTopics = function () {
        var topic = {'topic_id': '27', 'subject': 'Artificial Inteligence :: Robot is very dangorous',
            'category': 'DataScience',
            'content': 'A robot is a machine—especially one programmable by a computer— capable of carrying out a complex series of actions automatically. ',
            't_day': '12',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.topics.push(topic);
        self.masterTopics.push(topic);

        topic = {'topic_id': '36', 'subject': 'Machine Learning:: Linear regression is difficult to understand',
            'category': 'MachineLearning',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '13',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.topics.push(topic);
        self.masterTopics.push(topic);

        topic = {'topic_id': '37', 'subject': 'Machine Learning:: Linear regression 2',
            'category': 'Hadoop',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '14',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.topics.push(topic);
        self.masterTopics.push(topic);

        topic = {'topic_id': '38', 'subject': 'Machine Learning:: Linear regression 3',
            'category': 'DataScience',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '15',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.topics.push(topic);
        self.masterTopics.push(topic);

        topic = {'topic_id': '39', 'subject': 'Machine Learning:: Linear regression 4',
            'category': 'Spark',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '18',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.topics.push(topic);
        self.masterTopics.push(topic);

        topic = {'topic_id': '40', 'subject': 'Machine Learning:: Linear regression 5',
            'category': 'MachineLearning',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '19',
            't_mon': 'Oct',
            't_year': '2019'
        };
        self.topics.push(topic);
        self.masterTopics.push(topic);
    };

    self.pullCatogories = function () {
        self.categories.push({'key': 'DataScience', 'value': 'Data Science'});
        self.categories.push({'key': 'MachineLearning', 'value': 'Machine Learning'});
        self.categories.push({'key': 'ArtificialIntelligence', 'value': 'Artificial Intelligence'});
        self.categories.push({'key': 'Grafana', 'value': 'Grafana'});
        self.categories.push({'key': 'Tabview', 'value': 'Tabview'});
        self.categories.push({'key': 'Spark', 'value': 'Spark'});
    };

    self.gotoTopic = function (data) {
        $('#topic_details').show();
        $('#Home_Screen').hide();
        topicDetailsModel.addTopic(data);
    };

    self.submitPost = function () {
        console.log('Submit Post');
    };

    self.searchTopics = function () {
        console.log('Search Post');
        var filter = document.getElementById('topics_search_filter').value;
        var totalTopics = self.masterTopics.length;
        self.topics.removeAll();
        for (var i = 0; i < totalTopics; i++) {
            var topic = self.masterTopics[i];
            if (topic.subject.toUpperCase().indexOf(filter.toUpperCase()) >= 0
                    || topic.category.toUpperCase().indexOf(filter.toUpperCase()) >= 0
                    || topic.content.toUpperCase().indexOf(filter.toUpperCase()) >= 0) {
//                console.log('Pushing ..."' + topic.subject.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.category.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.content.toUpperCase().indexOf(filter.toUpperCase()) + '", Filter:' + filter);
                self.topics.push(topic);
            }
        }
    };


    self.searchCategory = function (data, event) {
        var target = event.currentTarget;
        var filter = target.toString().split("#")[1];
//        console.log('Filter:' + filter);
        var totalTopics = self.masterTopics.length;
        self.topics.removeAll();
        for (var i = 0; i < totalTopics; i++) {
            var topic = self.masterTopics[i];
            if ((topic.category.toUpperCase().indexOf(filter.toUpperCase()) >= 0) || filter == 'ALL') {
//                console.log('Pushing ..."' + topic.subject.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.category.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.content.toUpperCase().indexOf(filter.toUpperCase()) + '", Filter:' + filter);
                self.topics.push(topic);
            }
        }
    };

}



var topicsMainModel = new HomeModel();
topicsMainModel.pullTopics();
topicsMainModel.pullCatogories();

$('#topics_column').load("topics_main.php", function (data) {
    console.log('Topics main page is loaded into page.');

    tinymce.init({selector: '#new_topic',
        plugins: "image",
        menubar: ["file", "edit", "view", "insert"]
    });
    console.log('TinyMCE is initialized for new post creation');

    console.log('Applying Bindings to Home Screen');
    ko.applyBindings(topicsMainModel, document.getElementById('topics_column'));
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
            'written_by': loginUser, 'discussion_ref_id': '',
            'details': replyContent,
            'marked_by_admin': '0', 'discussion_date': (date.getFullYear() + '-' + mon + '-' + day)
            , innerDetails: []};
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
    $('#topic_details').load("topics_details.php", function (data) {
        console.log('Topics details page is loaded into page.');
        tinymce.init({selector: '#topic_detail_feedback',
            plugins: "image",
            menubar: ["file", "edit", "view", "insert"]
        });
        console.log('TinyMCE is initialized for descussions');
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
    ko.applyBindings(topicsMainModel, document.getElementById('_othercontrolls'));
});

function applyTopicDetailsBinding() {
    console.log('Applying Bindings to Topic Details');
    var topicDetDiv = document.getElementById('topic_details');
    ko.cleanNode(topicDetDiv);
    ko.applyBindings(topicDetailsModel, topicDetDiv);
    console.log('Bindings Applied to Topic Details');
}