function HomeModel() {
    var self = this;
    self.topics = ko.observableArray([]);
    var topic = {'subject': 'Artificial Inteligence :: Robot is very dangorous',
        'content': 'A robot is a machine—especially one programmable by a computer— capable of carrying out a complex series of actions automatically. ',
        't_day': '12',
        't_mon': 'Sep',
        't_year': '2019'
    };
    self.topics.push(topic);

    topic = {'subject': 'Machine Learning:: Linear regression is difficult to understand',
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
console.log('Applying Bindings to Home Screen');
ko.applyBindings(model1, document.getElementById('Home_Screen'));
console.log('Bindings Applied to Home Screen');

function TopicDetails() {
    var self = this;
    self.topics = ko.observableArray([]);
    self.addTopic = function (topic) {
        self.topics.removeAll();
        self.topics.push(topic);
    };
}

var model2 = new TopicDetails();
console.log('Applying Bindings to Topic Details');
ko.applyBindings(model2, document.getElementById('topic_details'));
console.log('Bindings Applied to Topic Details');
