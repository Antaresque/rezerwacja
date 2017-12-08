<?php
// lista funkcji do 'pracownicy'
$path = './pracownicy/';

if(empty($request))                       // puste zapytanie
  if(checkTokenAccess('szef'))            // szef
    include_once($path.'get.php');        // zbiera wszystkie rekordy

else if($request[0] == 'insert')          // TODO: kod do dodawania =w=
  if(checkTokenAccess('szef'))            // dodawanie tylko dla szefa
    include_once($path.'insert.php');

else if($request[0] == 'delete')          // TODO: kod do usuwania też =w=
  if(checkTokenAccess('szef'))            // usuwanie tylko dla szefa
    include_once($path.'delete.php');

else if($request[0] == 'change')          // TODO: modyfikacja (╯°□°）╯︵ ┻━┻
  if(checkTokenAccess('szef'))            // modyfikacja tylko dla szefa
    include_once($path.'change.php');
