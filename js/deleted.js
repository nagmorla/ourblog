/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//discussions model --> deleted code

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


// topics model --> deleted code

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
