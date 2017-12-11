<?php
use \Firebase\JWT\JWT;

$login = $input['login'];
$pass = $input['pass']; // pobierz login/hasło z POST

$data = DB::queryFirstRow("SELECT * FROM rejestracja_view WHERE login = %s", $login);
// sprawdź, czy istnieje użytkownik w tabeli

if(is_null($data)) { // brak wyników
  error_message('LOGIN_NOT_FOUND');
}
else {
  $funkcja = $data['funkcja'];
  if($funkcja == 'klient'){
    $data2 = DB::queryFirstRow("SELECT * FROM klienci WHERE login = %s AND aktywny = 1", $login);

    if(is_null($data2)) error_message('ACCOUNT_NOT_ACTIVE');
    else {
      $id = $data2['id_klienta'];

      if(validate_pw($pass, $data2['haslo'])) {
        $login_result = true;
        $payload = array('id' => $id, 'funkcja' => $funkcja, 'exp' => time() + 7*24*60*60);
        $token = JWT::encode($payload, $jwt_secret);
        $result = array("jwt" => $token);
      }
      else error_message('WRONG_PASS');
    }
  }
  else if($funkcja == 'pracownik' || $funkcja == 'szef'){
    $data2 = DB::queryFirstRow("SELECT * FROM pracownicy WHERE login = %s", $login);
    $id = $data2['id_pracownika'];

    if(validate_pw($pass, $data2['haslo'])) {
      $login_result = true;
      $payload = array('id' => $id, 'funkcja' => $funkcja, 'exp' => time() + 7*24*60*60);
      $token = JWT::encode($payload, $jwt_secret);
      $result = array("jwt" => $token);
    }
    else error_message('WRONG_PASS');
  }
  else {
    error_message('UNKNOWN_AUTHFUNCTION'); //to nie powinno sie stac ale w razie co
  }
}
