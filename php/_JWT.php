<?php
require_once '_jwt/BeforeValidException.php';
require_once '_jwt/ExpiredException.php';
require_once '_jwt/SignatureInvalidException.php';
require_once '_jwt/JWT.php';
use \Firebase\JWT\JWT;

$jwt_secret = json_decode(file_get_contents('secret.json'), true)['secret'];

function getAuthorizationHeader(){
  $headers = null;
  if (isset($_SERVER['Authorization'])) {
      $headers = trim($_SERVER["Authorization"]);
  }
  else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
      $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
  }
  else if (function_exists('apache_request_headers')) {
      $requestHeaders = apache_request_headers();
      $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
      //print_r($requestHeaders);
      if (isset($requestHeaders['Authorization'])) {
          $headers = trim($requestHeaders['Authorization']);
      }
  }
  return $headers;
}

function getBearerToken() {
  $headers = getAuthorizationHeader();
  // HEADER: Get the access token from the header
  if (!empty($headers)) {
      if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
          return $matches[1];
      }
  }
  return null;
}

function checkTokenAccess($funkcja){
  global $jwt_secret;

  $jwt = getBearerToken();
  if(isset($jwt)){
    try{
      $payload = JWT::decode($jwt, $jwt_secret, array('HS256'));
    }
    catch(SignatureInvalidException $e){
      http_response_code(401); return false;
    }
    catch(UnexpectedValueException $e){
      echo $e->getMessage(); return false;
    }
    return ($payload->funkcja == $funkcja);
  }
  else {
    http_response_code(401);
    return false;
  }
}

function checkTokenID($id){
  global $jwt_secret;

  $jwt = getBearerToken();
  if(isset($jwt)){
    try{
      $payload = JWT::decode($jwt, $jwt_secret, array('HS256'));
    }
    catch(SignatureInvalidException $e){
      http_response_code(401); return false;
    }
    catch(UnexpectedValueException $e){
      echo $e->getMessage(); return false;
    }
    return ($payload->id == $id);
  }
  else {
    http_response_code(401);
    return false;
  }
}

function getPayload(){
  global $jwt_secret;

    $jwt = getBearerToken();
    if(isset($jwt)){
      try{
        $payload = JWT::decode($jwt, $jwt_secret, array('HS256'));
      }
      catch(SignatureInvalidException $e){
        http_response_code(401); return false;
      }
      catch(UnexpectedValueException $e){
        echo $e->getMessage(); return false;
      }
      return $payload;
    }
    else {
      http_response_code(401);
      return false;
    }
}
