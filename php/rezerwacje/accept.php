<?php
$id_rez = $input['id'];
$id_prac = getPayload()->id;

$check = DB::update('rezerwacje', array('zatwierdzony' => 1), 'id_rezerwacji = %i', $id_rez);

if(DB::affectedRows() > 0){
  $result = array('result' => true);
}
else error_message('RESERVATION_NOT_FOUND');

// TODO: mail
