<?php
$login = $array['login'];
$pass = $array['pass']; // pobierz login/hasło z POST

$data = DB::queryFirstRow("SELECT * FROM klienci WHERE login = %s", $login);
// sprawdź, czy istnieje użytkownik w tabeli

if(is_null($data)) { // brak wyników
  $result = error_message('LOGIN_NOT_FOUND');
}
else {
  $id = $data['id_klienta'];
  $funkcja = 'klient';

  if(validate_pw($pass, $result['haslo'])) {
    $login_result = true;
    $payload = array('id' => $id, 'funkcja' => $funkcja, 'exp' => time() + 7*24*60*60);
    $token = JWT::encode($data, $jwt_secret);
    $result = array("jwt" => $token);
  }
  else error_message('WRONG_PASS');
}
