/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var req_topic_id = document.getElementById('topic_id').value;
console.log('Req::' + req_topic_id);
var top = {};
top.topic_id = 1;
top.subject = 'testing';
top.category = 'test category';
top.content = 'test details';
top.t_day = '23';
top.t_mon = 'JAN';
top.t_year = '2019';

if (req_topic_id == undefined || req_topic_id == 'undefined' || req_topic_id == '') {
    $('#topic_details').html('Invalid topic is browsed');
} else {
    topicDetailsModel.addTopic(top);
}
setTimeout(function () {
    $('#home_screen_control').hide();
}, 3000);

