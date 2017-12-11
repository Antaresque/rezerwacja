<?php
function mail_message($email, $type, $extra){
  $headers = "From: admin@hotel-jajusz.cba.pl";

  if($type == 'VERIFY'){
    $subject = 'Potwierdzenie konta na hotel-jajusz.cba.pl';
    $message = 'Oto link aktywacyjny do twojego konta: '.$extra;
  }
  if($type == 'RESERVATION'){
    $subject = 'Złożono rezerwację na hotel-jajusz.cba.pl';
    $message = 'Twoja rezerwacja właśnie oczekuje na sprawdzenie '.$extra.". Dziękujemy za skorzystanie z naszych usług";
  }
  if($type == 'CONFIRM'){
    $subject = 'Potwierdzenie rezerwacji na hotel-jajusz.cba.pl';
    $message = "Twoja rezerwacja właśnie została potwierdzona w pokoju ".$extra.". Dziękujemy za skorzystanie z naszych usług";
  }
  if($type == 'REFUSE'){
    $subject = 'Wycofanie rezerwacji na hotel-jajusz.cba.pl';
    $message = "Twoja rezerwacja właśnie została cofnięta: pokój ".$extra.". Jeżeli uważasz, że to błąd, skontaktuj się z nami drogą telefoniczną lub mailową";
  }
  mail($email, $subject, $message, $headers);
}
