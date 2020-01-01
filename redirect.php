<?php

session_start();

$username = "";
$loginComplete = 0;
$adminUser = 0;

if(isset($_GET["rparam"])){
$rparam=$_GET["rparam"];

if($rparam=="loggedout"){
	
	session_destroy();
	session_commit();
	header("Location:index.php");
	exit;
}

$rparamDecode=base64_decode($rparam);


$rparmArr=explode("^^^",$rparamDecode);

if(count($rparmArr)==3){
$firstVal=$rparmArr[0];
$secondVal=$rparmArr[1];
$thirdVal=$rparmArr[2];

if($firstVal=="Key@!$%"){

    $_SESSION['login_complete']=1;
    $_SESSION['username']=$secondVal;
	$_SESSION['admin_user']=$thirdVal;
	header("Location:index.php");
	exit;
}
}
}
header("Location:index.php");
?>
