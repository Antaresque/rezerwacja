<?php
$login = $array['login'];
$email = $array['email'];

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
  $haslo = generate_hash($array['pass']); // TODO: rejestracja dla klientów
  $imie = $array['imie'];
  $nazwisko = $array['nazwisko'];
  $nr_tel = $array['telefon'];

  DB::insert('uzytkownicy', array(
    'imie' => $imie,
    'nazwisko' => $nazwisko,
    'adres' => $adres,
    'nr_tel' => $nr_tel,
    'login' => $login,
    'haslo' => $haslo));
  $result = array('result' => true);
}
