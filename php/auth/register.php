<?php
$login = $input['login'];
$email = $input['email'];

$checklogin = DB::queryFirstRow("SELECT * FROM klienci WHERE login = %s", $login);
$checkemail = DB::queryFirstRow("SELECT * FROM klienci WHERE email = %s", $email);
  // sprawdź czy login/email znajduje się w bazie

$register_possible = true; // czy można się zarejestrować

if(!is_null($checklogin)) { // jeżeli login znajduje się w bazie to nie można
  error_message('LOGIN_TAKEN');
  $register_possible = false;
}
if(!is_null($checkemail)) { // tak samo dla e-maila
  error_message('EMAIL_TAKEN');
  $register_possible = false;
}

if($register_possible) {
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
// TODO: zrobic weryfikacje na mail
