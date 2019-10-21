var req_topic_id = document.getElementById('topic_id').value;
console.log('Req::' + req_topic_id);
if (req_topic_id == undefined || req_topic_id == 'undefined' || req_topic_id == '') {
    $('#topic_details').html('Invalid topic is browsed');
} else {
    console.log('Pulling topic definition for tid: ' + req_topic_id);
    var URL = GET_TOPIC_URL;
    URL = URL.replace(/{tid}/g, req_topic_id);
    console.log('URL::' + URL);
    var top = {};
    $.getJSON(URL, function (data) {
        if (data == null || data == 'null') {
            console.error('Topic is not defined for topic:' + req_topic_id);
            $('#topic_details').html('Invalid topic is browsed');
        } else {
            console.log('Discussions pulled from real target::' + data.length);
            var value = data[0];
            //        $.each(data, function (index, value) {
            top.topic_id = value.topic_id;
            top.subject = value.subject;
            top.category = value.category;
            top.content = value.details;
            var creationD = value.creation_date.toString();
            var date = creationD.split(" ")[0];
            var time = creationD.split(" ")[1];
            var d = new Date(date + "T" + time + "Z");
            top.t_day = d.getDate();
            top.t_mon = getMonthLabel(d.getMonth());
            top.t_year = d.getFullYear();
//        });
            topicDetailsModel.addTopic(top);
            setTimeout(function () {
                $('#home_screen_control').hide();
            }, 3000);
        }
    });

}
//top.topic_id = 1;
//top.subject = 'testing';
//top.category = 'test category';
//top.content = 'test details';
//top.t_day = '23';
//top.t_mon = 'JAN';
//top.t_year = '2019';

//if (req_topic_id == undefined || req_topic_id == 'undefined' || req_topic_id == '') {
//    $('#topic_details').html('Invalid topic is browsed');
//} else {
//    topicDetailsModel.addTopic(top);
//}
//setTimeout(function () {
//    $('#home_screen_control').hide();
//}, 3000);

