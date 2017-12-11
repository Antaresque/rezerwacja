<?php
function mail_message($email, $type){
  $mail = 'admin@hotel-jajusz.cba.pl';

  $headers =  'MIME-Version: 1.0'."\r\n";
  $headers .= 'From: '.$mail."\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n";

}
