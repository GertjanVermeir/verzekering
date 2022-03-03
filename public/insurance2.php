<?php

$to = "info@auto-verzekering-vergelijken.be";
$name = $_POST['name'];
$subject = "Aanvraag van de website - " . $name;
$message = $_POST['message'];

require ('./PHPMailer.php');
require ('./SMTP.php');
require ('./Exception.php');

$email = new PHPMailer\PHPMailer\PHPMailer();

$email->IsSMTP();

$email->SetFrom($to); //Name is optional
$email->SMTPAuth = true;
$email->SMTPSecure = "tls";
$email->Host = "send.one.com";
$email->Port = 587;
$email->Username = "info@auto-verzekering-vergelijken.be";
$email->Password = "Vakantie17";

$email->Subject   = $subject;
$email->IsHTML(true);
$email->Body      = $message;
$email->AddAddress( $to );

if(!is_null($_FILES) && !empty($_FILES['files'])) {
    $files = $_FILES['files'];

    for ($i = 0; $i < count($files["name"]); $i++) {
        $file_name = $files['name'][$i];
        $file_temp = $files['tmp_name'][$i];
        $file_path = $files['tmp_name'][$i];

        //copy the temp. uploaded file to uploads folder
        $path_of_uploaded_file = "./files/" . $file_name;

        if(!copy($file_temp, $path_of_uploaded_file))
        {
            $errors .= '\n error while copying the uploaded file';
        }

        $email->AddAttachment($path_of_uploaded_file,$file_name);

    }
}

return $email->Send();

?>
