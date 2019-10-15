
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

function gotoMain() {
    $('#topic_details').hide();
    $('#Home_Screen').show();
}


var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
function getMonthLabel(indx) {
    return months[indx];
}

function mydecode(mystring) {
    return mystring.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}
function myencode(mystring) {
//    return mystring.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, "\"");
    return mystring.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/\\&quot;/g, '"');
}