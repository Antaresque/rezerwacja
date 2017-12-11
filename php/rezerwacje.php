<?php
// lista funkcji do 'rezerwacje'
$path = './rezerwacje/';

if(empty($request)) {                     // puste zapytanie
  if(checkTokenAccess('pracownik'))
    include_once($path.'get.php');        // zbiera wszystkie rekordy
}
else if($request[0] == 'insert') {        // TODO: kod do dodawania =w=
  if(checkTokenAccess('klient'))
    include_once($path.'insert.php');
}
else if($request[0] == 'accept') {        // TODO: akceptowanie / odrzucanie rezerwacji
  if(checkTokenAccess('pracownik'))       // nie wiem czy zrobić w jednym pliku czy w dwóch >.<
  include_once($path.'accept.php');
}
else if($request[0] == 'delete') {
  if(checkTokenAccess('pracownik'))
    include_once($path.'delete.php');
}
else if($request[0] == 'sprawdz') {
  include_once($path.'sprawdz.php');
}
else if($request[0] == 'niezatwierdzone') {
  if(checkTokenAccess('pracownik'))
    include_once($path.'niezatw.php');
}
else if($request[0] == 'mojerezerw') {
  if(checkTokenAccess('klient'))
    include_once($path.'mojerezerw.php');
}
else error_message('UNDEFINED_FUNCTION');
