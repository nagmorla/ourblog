<?php
require_once('class.phpmailer.php');
//error_reporting(E_STRICT);
function sendMailSMTP($to,$subject,$body){
    date_default_timezone_set('Asia/Calcutta'); 
    $mail = new PHPMailer();
    //$body = eregi_replace("[\]",'',$body);

$mail->IsSMTP();
$mail->Host="mail.travelagentims.com"; 
$mail->SMTPAuth = true;                 
$mail->Host = "mail.travelagentims.com";
$mail->Port = 25;
$mail->Username  = "arun@travelagentims.com"; // SMTP account username
$mail->Password  = "Ihateyou@123";        // SMTP account password

$mail->SetFrom('arun@travelagentims.com', 'Travel Agent Info');

$mail->AddReplyTo("arun@travelagentims.com","Travel Agent Info");

$mail->Subject=$subject;
$mail->MsgHTML($body);
$toAdress = explode(";", $to);
foreach ($toAdress as $addr) {
    if(trim($addr)!="")
        $mail->AddAddress($addr);
}
if(count($toAdress)>0 && !$mail->Send()) {
  return "Mailer Error: " . $mail->ErrorInfo;
} else {
  return "Message sent";
}
}
?>
