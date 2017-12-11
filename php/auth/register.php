<?php
$login = $input['login'];
$email = $input['email'];

$check = DB::queryFirstRow("SELECT * FROM rejestracja_view WHERE login = %s OR email = %s", $login, $email);
  // sprawdź czy login/email znajduje się w bazie

if(!is_null($check)) { // jeżeli login znajduje się w bazie to nie można
  error_message('LOGIN_TAKEN');
}
else {
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $haslo = generate_hash($input['pass']);
    $imie = $input['imie'];
    $nazwisko = $input['nazwisko'];
    $nr_tel = $input['telefon'];

    DB::insert('klienci', array(
      'imie' => $imie,
      'nazwisko' => $nazwisko,
      'nr_tel' => $nr_tel,
      'email' => $email,
      'login' => $login,
      'haslo' => $haslo));
    $result = array('result' => true);
  }
  else error_message('WRONG_MAIL');
}
// TODO: zrobic weryfikacje na mail
