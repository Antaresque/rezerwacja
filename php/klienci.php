<?php
// lista funkcji do 'klienci'
$path = './klienci/';

if(empty($request))                       // puste zapytanie
  if(checkTokenAccess('szef'))
    include_once($path.'get.php');        // zbiera wszystkie rekordy

else if($request[0] == 'getbyid')         // TODO: kod do sprawdzania klienta po id (moze tylko dla wlasciciela zrobic sprawdzanie)
  include_once($path.'getbyid.php');

else if($request[0] == 'change')          // TODO: ale nie wiem czy potrzebne w sumie
  include_once($path.'change.php');

else if($request[0] == 'delete')          // TODO: usuwanie
  if(checkTokenAccess('szef'))
    include_once($path.'delete.php');

