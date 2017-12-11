<?php
use Firebase\JWT\JWT;
$token_potw = $input['token'];

try {
  $data = JWT::decode($token_potw, $jwt_secret, array('HS256'));
}
catch(SignatureInvalidException $e) {
  http_response_code(401);
}
catch(UnexpectedValueException $e) {
  echo $e->getMessage();
}

if($data != false){
  $id = $data->id_potw;
  DB::update('klienci', array('aktywny' => 1), 'id_klienta = %i', $id);
}
