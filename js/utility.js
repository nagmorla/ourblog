
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
    deletePageHistoryCookie();
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

function addslashes(str) {
    // Escapes single quote, double quotes and backslash characters in a string with backslashes    
    //   
    // version: 810.114  
    // discuss at: http://phpjs.org/functions/addslashes  
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)  
    // +   improved by: Ates Goral (http://magnetiq.com)  
    // +   improved by: marrtins  
    // +   improved by: Nate  
    // +   improved by: Onno Marsman  
    // *     example 1: addslashes("kevin's birthday");  
    // *     returns 1: 'kevin\'s birthday'  

    return (str + '').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
}



function createPageHistoryCookie() {
    var cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() + (1 * 1000 * 60 * 60 * 24));
    var expires = "expires=" + cookieDate.toGMTString(); //Compose the expirartion date
    window.document.cookie = 'enter_discussion=yes;' + expires;
}

function checkHistoryAndLoadDiscussion() {
    var enterDiscussionCookieVal = '';
    var enterDiscussionCookie = "enter_discussion=";
    var cArr = window.document.cookie.split(';');
    for (var i = 0; i < cArr.length; i++) {
        var c = cArr[i].trim();
        console.log('Browser cookie:' + c);
        if (c.indexOf(enterDiscussionCookie) == 0) {
            enterDiscussionCookieVal = c.substring(enterDiscussionCookie.length, c.length);
            console.log('Enter Discussion Cookie Value:' + enterDiscussionCookieVal);
            break;
        }
    }
    if (enterDiscussionCookieVal == 'yes') {
        $('#topic_details').show();
        $('#Home_Screen').hide();
        topicDetailsModel.addTopic(JSON.parse(sessionStorage.last_topic));
    }
}

function deletePageHistoryCookie() {
    var cookieExpiryDate = new Date();
    cookieExpiryDate.setTime(cookieExpiryDate.getTime() - (1000 * 60 * 60 * 24));
    var expires = "expires=" + cookieExpiryDate.toGMTString();
    var enterDiscussionCookie = "enter_discussion=";
    window.document.cookie = enterDiscussionCookie + "=" + "; " + expires;
    console.log('Enter Discussion Cookie Deleted');
}