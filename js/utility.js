
function gotoTopicDetails(obj) {
    console.log('Going to topic details :: ' + JSON.stringify(obj));
}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    console.log('Current Active Tab:' + e.target); // newly activated tab
    var x = e.target.toString();
    var tokens = x.split('#');
    var currentTab = tokens[tokens.length - 1];
    console.log(tokens.length + ", " + currentTab);
    console.log('Previous Active Tab:' + e.relatedTarget); // previous active tab
    gotoMain();
});

function gotoMain(){
    $('#topic_details').hide();
    $('#Home_Screen').show();
}