<?php
use \Firebase\JWT\JWT;

$login = $input['login'];
$email = $input['email'];

$check = DB::queryFirstRow("SELECT * FROM rejestracja_view WHERE login = %s", $login);
$check2 = DB::queryFirstRow("SELECT * FROM rejestracja_view WHERE email = %s", $email);
  // sprawdź czy login/email znajduje się w bazie

if(!is_null($check)) { // jeżeli login znajduje się w bazie to nie można
  error_message('LOGIN_TAKEN');
}
else if(!is_null($check2)) { // jeżeli email znajduje się w bazie to nie można
  error_message('EMAIL_TAKEN');
}
else {
  $imie = $input['imie'];
  $nazwisko = $input['nazwisko'];
  $nr_tel = $input['nr_telefonu'];
  $adres = $input['adres'];
  $pensja = $input['pensja'];

  $haslo = generate_hash($input['haslo']);
  $funkcja = 'pracownik';

  DB::insert('klienci', array(
    'imie' => $imie,
    'nazwisko' => $nazwisko,
    'nr_tel' => $nr_tel,
    'email' => $email,
    'login' => $login,
    'haslo' => $haslo,
    'adres' => $adres,
    'pensja' => $pensja));
  $result = array('result' => true);
}

