/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function HomeModel() {
    var self = this;
    self.masterTopics = [];
    self.topics = ko.observableArray([]);
    self.categorizedTopics = ko.observableArray([]);
    self.categories = ko.observableArray([]);
    self.currentPage = ko.observable(1);
    self.itemsPerPage = 15;
    self.totalTopics = 0;
    self.totalPages = ko.observable(1);

    self.categorizedTopics.subscribe(function (changes) {
        self.totalTopics = self.categorizedTopics().length;
        self.totalPages(Math.ceil(self.totalTopics / self.itemsPerPage));
//        console.log('Total Topics:' + self.totalTopics);
    }, null, "arrayChange");

    self.gotoPreviousPage = function () {
        console.log('Go to Previous');
        if (self.currentPage() == 1) {
            return;
        }
        $("#pagination_next").removeClass("disabled");
        self.currentPage(self.currentPage() - 1);
        console.log('self.currentPage == ' + self.currentPage());
        if (self.currentPage() == 1) {
            $("#pagination_prev").addClass("disabled");
        }
        self.loadTopicsForPage(self.currentPage());
    };

    self.gotoNextPage = function () {
        console.log('Go to Next');
        if (self.currentPage() == self.totalPages()) {
            return;
        }
        $("#pagination_prev").removeClass("disabled");
        self.currentPage(self.currentPage() + 1);
        console.log('self.currentPage == ' + self.currentPage());
        if (self.currentPage() == self.totalPages()) {
            $("#pagination_next").addClass("disabled");
        }
        self.loadTopicsForPage(self.currentPage());
    };

    self.loadTopicsForPage = function (pageNum) {
        self.topics.removeAll();
        var count = Math.min(self.categorizedTopics().length, (pageNum * self.itemsPerPage));
        for (var i = ((pageNum - 1) * self.itemsPerPage); i < count; i++) {
            var topic = self.categorizedTopics()[i];
            self.topics.push(topic);
        }
    };
//self.fullName = ko.pureComputed(function() {
//    return this.firstName() + " " + this.lastName();
//}, this);


    self.pullRealTopics = function () {
        $.getJSON(TOPICS_URL, function (data) {
            console.log('Topics pulled from real target::' + data.length);
            var topic = '';
            g_topicsCount = 0;
            $.each(data, function (index, value) {
                g_topicsCount = g_topicsCount + 1;
                var creationD = value.creation_date.toString();
                var date = creationD.split(" ")[0];
                var time = creationD.split(" ")[1];
                var d = new Date(date + "T" + time + "Z");
                var sub = value.subject;
                if (sub == undefined || sub == 'undefined' || sub == '') {
                    console.error('Empty subject in topic::' + value.topic_id);
                }
                var cont = value.details;
//                console.log('Subject BFR:' + sub);
//                console.log('Subject AFR:' + myencode(sub));
                topic = {'topic_id': value.topic_id,
                    'subject': myencode(sub),
                    'content': myencode(cont),
                    'category': value.category,
                    't_day': d.getDate(),
                    't_mon': getMonthLabel(d.getMonth()),
                    't_year': d.getFullYear()
                };
                self.masterTopics.push(topic);
                self.categorizedTopics.push(topic);
            });
            topicsDataPrepared = true;
            console.log('<<Topics Read Complete>>');
        });
    };

    self.pullTopics = function () {
        var topic = {'topic_id': '27', 'subject': 'Artificial Inteligence :: Robot is very dangorous',
            'category': 'DataScience',
            'content': 'A robot is a machine—especially one programmable by a computer— capable of carrying out a complex series of actions automatically. ',
            't_day': '12',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '36', 'subject': 'Machine Learning:: Linear regression is difficult to understand',
            'category': 'MachineLearning',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '13',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '37', 'subject': 'Machine Learning:: Linear regression 2',
            'category': 'Hadoop',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '14',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '38', 'subject': 'Machine Learning:: Linear regression 3',
            'category': 'DataScience',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '15',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '39', 'subject': 'Machine Learning:: Linear regression 4',
            'category': 'Spark',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '18',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '40', 'subject': 'Machine Learning:: Linear regression 5',
            'category': 'MachineLearning',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '19',
            't_mon': 'Oct',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '41', 'subject': 'Machine Learning:: Linear regression 6',
            'category': 'DataScience',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '15',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '42', 'subject': 'Machine Learning:: Linear regression 7',
            'category': 'Spark',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '18',
            't_mon': 'Sep',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);

        topic = {'topic_id': '43', 'subject': 'Machine Learning:: Linear regression 8',
            'category': 'MachineLearning',
            'content': 'Make better decisions utilizing linear regression techniques. Learn more today. Leverage IBM® SPSS for simple linear regression. ',
            't_day': '19',
            't_mon': 'Oct',
            't_year': '2019'
        };
        self.masterTopics.push(topic);
        self.categorizedTopics.push(topic);
    };

    self.pullCatogories = function () {
//        self.categories.push({'key': 'DataScience', 'value': 'Data Science'});
//        self.categories.push({'key': 'MachineLearning', 'value': 'Machine Learning'});
//        self.categories.push({'key': 'ArtificialIntelligence', 'value': 'Artificial Intelligence'});
//        self.categories.push({'key': 'Grafana', 'value': 'Grafana'});
//        self.categories.push({'key': 'Tabview', 'value': 'Tabview'});
//        self.categories.push({'key': 'Spark', 'value': 'Spark'});

        $.getJSON(CATEGORIES_URL, function (data) {
            console.log('Categories pulled from real target::' + data.length);
            $.each(data, function (index, value) {
                self.categories.push({'key': value.category_name, 'value': value.category_name});
            });
        });
    };

    self.gotoTopic = function (data) {
        sessionStorage.last_topic = JSON.stringify(data);
        console.log('Browser session data is saved.');
        createPageHistoryCookie();
        $('#topic_details').show();
        $('#Home_Screen').hide();
        topicDetailsModel.addTopic(data);
    };

    self.submitPost = function () {
        console.log('Submit Post');

        var replyContent = tinyMCE.get('new_topic').getContent();
        var category = document.getElementById('topic_categories').value;
        var subject = document.getElementById('topic_subject').value;
//        console.log(JSON.stringify(replyContent) + ', Category:' + category + ', Subject:' + subject);
        tinyMCE.get('new_topic').setContent('');
        var loginUser = document.getElementById('login_user').value;
//        var postdata = '';
//        postdata = postdata + '&category=' + encodeURIComponent(category);
//        postdata = postdata + '&content=' + encodeURIComponent(replyContent);
//        postdata = postdata + '&subject=' + encodeURIComponent(subject);
//        postdata = postdata + '&user_name=' + loginUser;
        var postdata = JSON.parse('{}');
        postdata.category = encodeURIComponent(category);
        postdata.subject = encodeURIComponent(subject);
        //	replyContent=replyContent.replace(/"/g,"\\\"");
        postdata.details = replyContent;
        postdata.created_by = encodeURIComponent(loginUser);
//        console.log(postdata);
//        console.log(JSON.stringify(postdata));
        $.post(POST_TOPIC_URL, 'myData=' + JSON.stringify(postdata), function (data) {
            alert('Topic posted successfully');
            console.log('Topic submitted successfully. ' + JSON.stringify(data));
        }).fail(function (data) {
            console.error('Failed to submit the topic.');
        });
        document.getElementById('topic_categories').value = '';
        document.getElementById('topic_subject').value = '';
    };

    self.searchTopics = function () {
        console.log('Search Post');
        var filter = document.getElementById('topics_search_filter').value;
        var totalTopics = self.masterTopics.length;
        self.topics.removeAll();
        self.categorizedTopics.removeAll();
        for (var i = 0; i < totalTopics; i++) {
            var topic = self.masterTopics[i];
            if (topic.subject.toUpperCase().indexOf(filter.toUpperCase()) >= 0
                    || topic.category.toUpperCase().indexOf(filter.toUpperCase()) >= 0
                    || topic.content.toUpperCase().indexOf(filter.toUpperCase()) >= 0) {
//                console.log('Pushing ..."' + topic.subject.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.category.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.content.toUpperCase().indexOf(filter.toUpperCase()) + '", Filter:' + filter);
                self.categorizedTopics.push(topic);
            }
        }
        self.resetPaginationVars();
    };


    self.searchCategory = function (data, event) {
        var target = event.currentTarget;
        var filter = target.toString().split("#")[1];
//        console.log('Filter:' + filter);
        var totalTopics = self.masterTopics.length;
        self.topics.removeAll();
        self.categorizedTopics.removeAll();
        for (var i = 0; i < totalTopics; i++) {
            var topic = self.masterTopics[i];
            if ((topic.category.toUpperCase().indexOf(filter.toUpperCase()) >= 0) || filter == 'ALL') {
//                console.log('Pushing ..."' + topic.subject.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.category.toUpperCase().indexOf(filter.toUpperCase()) + '||' + topic.content.toUpperCase().indexOf(filter.toUpperCase()) + '", Filter:' + filter);
                self.categorizedTopics.push(topic);
            }
        }
        self.resetPaginationVars();
    };

    self.resetPaginationVars = function () {
        self.loadTopicsForPage(1);
        self.currentPage(1);
        $("#pagination_prev").addClass("disabled");
        if (self.currentPage() == self.totalPages()) {
            $("#pagination_next").addClass("disabled");
        } else {
            $("#pagination_next").removeClass("disabled");
        }
    };

}



var topicsMainModel = new HomeModel();
//topicsMainModel.pullTopics();
topicsMainModel.pullRealTopics();
topicsMainModel.pullCatogories();

verifyTopicsLoaded(topicsMainModel);

function NotificationsModel() {
//    $('.dropdown').on('hide.bs.dropdown', function (event) {
//        console.log('Div Closed');
//    });

    $(".dropdown").on("hide.bs.dropdown", function (event) {
        var x = $(event.relatedTarget).text(); // Get the button text
        alert("You clicked on: " + x);
    });

    console.log('Notifications menu drop down events bind...');
//    $('#dLabel').on('hide.bs.dropdown', function (event) {
//        console.log('A Closed');
//    });

    var self = this;
    self.notifications = ko.observableArray([]);
    self.notCount = ko.observable();
    self.loadNotifications = function () {
        var postdata = JSON.parse('{}');
        var email = document.getElementById('login_user_email').value;
        postdata.email = encodeURIComponent(email);
        $.post(GET_NOTIFICATIONS, 'myData=' + JSON.stringify(postdata), function (data) {
            console.log(JSON.stringify(data));
            var data1 = JSON.parse(data);
            self.notCount(data1.length);
            $.each(data1, function (index, value) {
                self.notifications.push({id: value.id, data: value.data, type: value.type});
            });
        }).fail(function (data) {
            console.error('Failed to load notifications.');
        });
    };
}

var notificaionModel = new NotificationsModel();
notificaionModel.loadNotifications();
ko.applyBindings(notificaionModel, document.getElementById('user_notifications'));

$('#_othercontrolls').load("othercontrols.html", function (data) {
    console.log('Other controlls also loaded into page.');
    ko.applyBindings(topicsMainModel, document.getElementById('_othercontrolls'));
});



var topicsTimer;
var g_topicsCount = 0;
var topicsDataPrepared = false;
function verifyTopicsLoaded(self) {
    if (topicsDataPrepared === true || g_topicsCount >= 10) {
        topicsMainModel.loadTopicsForPage(1);
        loadTopicsMainPage();
    } else {
        resetTopicsTimer();
    }
}

function resetTopicsTimer() {
    console.log('Topic are not yet loaded ......');
    clearTimeout(topicsTimer);
    topicsTimer = setTimeout(verifyTopicsLoaded, 2000);
}

function loadTopicsMainPage() {
    $('#topics_column').load("topics_main.php", function (data) {
        console.log('Topics main page is loaded into page.');
        try {
            tinymce.init({selector: '#new_topic',
                plugins: "image paste link imagetools",
                height: 300,
                toolbar: "bold italic underline link",
                paste_data_images: true,
//                menubar: ["file", "edit", "view", "insert"]
                menubar: false
            });
            console.log('TinyMCE is initialized for new post creation');
        } catch (exp) {
            console.error("Couldn't initialize tiny mce editor for topics. " + exp);
        }
        console.log('Applying Bindings to Home Screen');
        ko.applyBindings(topicsMainModel, document.getElementById('topics_column'));
        console.log('Bindings Applied to Home Screen');
        checkHistoryAndLoadDiscussion();
    });

}


function loginUser(obj) {
    var userName = document.getElementById('email1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    if (userName == undefined || userName == null) {
        userName = '';
    }
    if (password == undefined || password == null) {
        password = '';
    }
    console.log('UN::' + userName + ', PWD::' + password);
    if (userName == '' || password == '') {
        $('#loginErrors').show();
        $('#loginErrors').html('Invalid username/password, please try again.');
        return;
    }
    var postdata = JSON.parse('{}');
    postdata.email = encodeURIComponent(userName);
    postdata.pwd = encodeURIComponent(password);
//        console.log('Posting.. ' + JSON.stringify(postdata));
    $.post(LOGIN_URL, 'myData=' + JSON.stringify(postdata), function (data) {
        var temp1 = JSON.stringify(data);
        temp1 = temp1.replace(/\\"/g, '"');
        temp1 = temp1.replace(/"{/g, '{');
        temp1 = temp1.replace(/}"/g, '}');
//        console.log('User login successfully. ' + JSON.stringify(data));
//        console.log(temp1);
        var temp2 = JSON.parse(temp1);
//        console.log('User login successfully. ' + JSON.stringify(temp2));
        if (temp2['status'] == 'success') {
            window.location = 'redirect.php?rparam=' + temp2['redirect_param'];
        } else {
            $('#loginErrors').show();
            $('#loginErrors').html('Invalid username/password, please try again.');
            console.error('Invalid login');
        }
    }).fail(function (data) {
        console.error('Failed to submit the topic.');
    });
}

function logoutUser(obj) {

    //alert('In Logout');

    $.post(LOGOUT_URL, function (data) {
        console.log(data);
        window.location = 'redirect.php?rparam=' + data;


    }).fail(function () {
        console.error('Failed to logout ');
    });


}
function regUser(obj) {


    var regName = document.getElementById('regname').value;
    var regPassword = document.getElementById('regpwd').value;
    var regMobile = document.getElementById('regmobile').value;
    var regEmail = document.getElementById('regmail').value;
    if (regName == undefined || regName == null) {
        regName = '';
    }
    if (regPassword == undefined || regPassword == null) {
        regPassword = '';
    }
    if (regMobile == undefined || regMobile == null) {
        regMobile = '';
    }
    if (regEmail == undefined || regEmail == null) {
        regEmail = '';
    }
    //console.log('UN::' + userName + ', PWD::' + password);
    if (regName == '' || regPassword == '' || regMobile == '' || regEmail == '') {
        $('#regErrors').show();
        $('#regErrors').html('Please fill all the fields.');
        return;
    }
    var postdata = JSON.parse('{}');
    postdata.first_name = encodeURIComponent(regName);
    postdata.password = encodeURIComponent(regPassword);
    postdata.phone_number = encodeURIComponent(regMobile);
    postdata.usr_email = encodeURIComponent(regEmail);
//        console.log('Posting.. ' + JSON.stringify(postdata));
    $.post(REG_URL, 'myData=' + JSON.stringify(postdata), function (data) {
        var temp1 = JSON.stringify(data);
        temp1 = temp1.replace(/\\"/g, '"');
        temp1 = temp1.replace(/"{/g, '{');
        temp1 = temp1.replace(/}"/g, '}');
//        console.log('User login successfully. ' + JSON.stringify(data));
//        console.log(temp1);
        var temp2 = JSON.parse(temp1);
//        console.log('User login successfully. ' + JSON.stringify(temp2));
        if (temp2['status'] == 'exists') {
            $('#regErrors').show();
            $('#regErrors').html('Error, User Already Exists.');

        } else if (temp2['status'] == 'success') {
            window.location = 'redirect.php?rparam=' + temp2['redirect_param'];
        } else {
            $('#regErrors').show();
            $('#regErrors').html('Error, please try again.');
            console.error('Invalid login');
        }
    }).fail(function (data) {
        console.error('Failed to submit the topic.');
    });

}

function passwordKeyup() {
    $('#loginErrors').hide();
}