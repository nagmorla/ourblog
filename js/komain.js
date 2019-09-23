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
        console.log('Inside nested function :: ' + JSON.stringify(data));
        $('#topic_details').show();
        $('#Home_Screen').hide();
        model2.addTopic(data);
    };
}

var model1 = new HomeModel();

$('#topics_column').load("topics_main.html", function (data) {
    console.log('Topics main page is loaded into page.');
    console.log('Applying Bindings to Home Screen');
    ko.applyBindings(model1, document.getElementById('Home_Screen'));
    console.log('Bindings Applied to Home Screen');

});


function TopicDetails() {
    var self = this;
    self.topics = ko.observableArray([]);
    self.details = ko.observableArray([]);
    self.addTopic = function (topic) {
        self.topics.removeAll();
        self.topics.push(topic);
        self.pullDetails(topic.topic_id);
    };

    self.pullDetails = function (id) {
        console.log('Pulling details for topic ... ' + id);
        self.details.removeAll();
        var detail;
        detail = {'discussion_id': '2002', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-17'};
        self.details.push(detail);
        detail = {'discussion_id': '2003', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-18'};
        self.details.push(detail);
        detail = {'discussion_id': '2004', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-19'};
        self.details.push(detail);
        detail = {'discussion_id': '2005', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-22'};
        self.details.push(detail);
        detail = {'discussion_id': '2006', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-23'};
        self.details.push(detail);
        detail = {'discussion_id': '2007', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-17'};
        self.details.push(detail);
        detail = {'discussion_id': '2008', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-20'};
        self.details.push(detail);
        detail = {'discussion_id': '2009', 'topic_id': id, 'type': 'REPLY', 'discussion_ref_id': '', 'details': 'This is testing content for this topic. When it goes to production, content will be modified and reliable.', 'marked_by_admin': '0', 'discussion_date': '2019-09-17'};
        self.details.push(detail);
    };
}

var model2 = new TopicDetails();


$('#topic_details').load("topics_details.html", function (data) {
    console.log('Topics details page is loaded into page.');
    console.log('Applying Bindings to Topic Details');
    ko.applyBindings(model2, document.getElementById('topic_details'));
    console.log('Bindings Applied to Topic Details');

});

$('#_othercontrolls').load("othercontrols.html", function (data) {
    console.log('Other controlls also loaded into page.');
});