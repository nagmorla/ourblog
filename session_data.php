<?php

$blogtitle = "Ravindrababu |Ravula Blog";
$blogheading = "Blog Heading";
//            echo 'Hai this is my first php application';
session_start();
//session_destroy();
//session_commit();

//$_SESSION['username'] = "ARUN";
//$_SESSION['useremail'] = "nag.morla@gmail.com";
//$_SESSION['login_complete'] = "1";
//$_SESSION['admin_user'] = "0";

$username = "";
$useremail = "";
$loginComplete = 0;
$adminUser = 0;

if (isset($_SESSION['login_complete'])) {
    $loginComplete = $_SESSION['login_complete'];
}

if (isset($_SESSION['useremail'])) {
    $useremail = $_SESSION['useremail'];
}

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
}

if (isset($_SESSION['admin_user'])) {
    $adminUser = $_SESSION['admin_user'];
}
?>
