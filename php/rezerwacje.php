<?php
// lista funkcji do 'rezerwacje'
$path = './rezerwacje/';

if(empty($request))                       // puste zapytanie
  if(checkTokenAccess('pracownik'))
    include_once($path.'get.php');        // zbiera wszystkie rekordy

else if($request[0] == 'insert')          // TODO: kod do dodawania =w=
  include_once($path.'insert.php');

else if($request[0] == 'accept')          // TODO: akceptowanie / odrzucanie rezerwacji
  if(checkTokenAccess('pracownik'))       // nie wiem czy zrobić w jednym pliku czy w dwóch >.<
  include_once($path.'accept.php');

else if($request[0] == 'delete')
  if(checkTokenAccess('pracownik'))
    include_once($path.'delete.php');

