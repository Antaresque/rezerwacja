<?php
use \Firebase\JWT\JWT;

$login = $input['login'];
$pass = $input['pass']; // pobierz login/hasło z POST

$data = DB::queryFirstRow("SELECT * FROM klienci WHERE login = %s", $login);
// sprawdź, czy istnieje użytkownik w tabeli

if(is_null($data)) { // brak wyników
  $result = error_message($result, 'LOGIN_NOT_FOUND');
}
else {
  $id = $data['id_klienta'];
  $funkcja = 'klient';

  if(validate_pw($pass, $data['haslo'])) {
    $login_result = true;
    $payload = array('id' => $id, 'funkcja' => $funkcja, 'exp' => time() + 7*24*60*60);
    $token = JWT::encode($payload, $jwt_secret);
    $result = array("jwt" => $token);
  }
  else $result = error_message($result, 'WRONG_PASS');
}
