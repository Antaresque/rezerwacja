<?php
require_once('_host.php');
require_once('_hash.php');
require_once('_JWT.php');
require_once('_messages.php');
use \Firebase\JWT\JWT;

//check for localhost (OPTIONS pre-flight response)
$method = $_SERVER['REQUEST_METHOD'];
if($method == 'OPTIONS') http_response_code(200);

// podziel link na części
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
// dane z POST
$input = json_decode(file_get_contents('php://input'), true);

// oddziela nazwę tabeli (pierwszy argument) od reszty
$tablename = array_shift($request);
$filename = $tablename.'.php';
// jeżeli wystąpi błąd to wystarczy tylko dopisać wiadomość błędu ($message)
$result = array();

if(file_exists($filename)) {
  include_once($filename); // plik z funkcjami
}
else {
  $result = error_message($result, 'FILE_NOT_FOUND'); // jak nie znajdzie pliku php to error
}

echo json_encode($result); //wysyła $result
