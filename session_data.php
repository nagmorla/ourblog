<?php

//            echo 'Hai this is my first php application';
session_start();
$_SESSION['username'] = "ARUN";
$_SESSION['login_complete'] = "1";
$_SESSION['admin_user'] = "0";

$username = "";
$loginComplete = 0;
$adminUser = 0;
if (isset($_SESSION['login_complete'])) {
    $loginComplete = $_SESSION['login_complete'];
}
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
}
if (isset($_SESSION['admin_user'])) {
    $adminUser = $_SESSION['admin_user'];
}
?>
