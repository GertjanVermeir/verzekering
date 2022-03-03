<?php

$_POST = json_decode(file_get_contents("php://input"), true);

$to = "info@auto-verzekering-vergelijken.be";
$name = $_POST['name'];
$subject = "Contact van de website - " . $name;
$contact = $_POST['contact'];
$message = "Van: " . $name . "\r\n";
$message .= "Contact: " . $contact . "\r\n";
$message .= "Bericht: \r\n" . $_POST['message'];

require ('./PHPMailer.php');
require ('./Exception.php');

$email = new PHPMailer\PHPMailer\PHPMailer();
$email->SetFrom($to); //Name is optional
$email->Subject   = $subject;
$email->Body      = $message;
$email->AddAddress( $to );

return $email->Send();

?>
