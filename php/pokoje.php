<?php
// lista funkcji do 'pokoje'
$path = './pokoje/';

if(empty($request)) {                     // puste zapytanie
  include_once($path.'get.php');          // zbiera wszystkie rekordy
}
else if($request[0] == 'getbyid'){
  include_once($path.'getbyid.php');
}
else if($request[0] == 'insert') {        // TODO: kod do dodawania =w=
  if(checkTokenAccess('szef'))            // dodawanie pokojów tylko dla szefa
    include_once($path.'insert.php');
}
else if($request[0] == 'delete') {        // TODO: kod do usuwania też =w=
  if(checkTokenAccess('szef'))            // usuwanie pokojów tylko dla szefa
    include_once($path.'delete.php');
}
else if($request[0] == 'change') {        // TODO: modyfikacja (╯°□°）╯︵ ┻━┻
  if(checkTokenAccess('szef'))            // modyfikacja pokojów tylko dla szefa
    include_once($path.'change.php');
}
else if($request[0] == 'wolnepokoje') {
  include_once($path.'wolnepokoje.php');
}
else if($request[0] == 'wolnepokojepage') {
  include_once($path.'wolnepokojepage.php');
}
else error_message('UNDEFINED_FUNCTION');
