<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function mail_message($email, $type){
  require_once '_mail/Exception.php';
  require_once '_mail/PHPMailer.php';

  $mail = new PHPMailer;

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'mail.cba.pl';                          // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'admin@hotel-jajusz.cba.pl';        // SMTP username
  $mail->Password = 'Janusz1';                          // SMTP password
  $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

  $mail->From = 'admin@hotel-jajusz.cba.pl';
  $mail->FromName = 'Hotel Jajusz';
  $mail->addAddress($email);                            // Add a recipient

  //$mail->WordWrap = 50;                               // Set word wrap to 50 characters
  $mail->isHTML(true);                                  // Set email format to HTML

  if($type = "VERIFY"){
    $mail->Subject = 'Potwierdzenie konta';
    $mail->Body    = 'testowy mail';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
  }

  if(!$mail->send()) {
      echo 'Message could not be sent.';
      echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
      echo 'Message has been sent';
  }
}
