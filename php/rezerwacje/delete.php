<?php
$id_rez = $input['id'];
$id_prac = getPayload()->id;

$check = DB::delete('rezerwacje', 'id_rezerwacji = %i', $id_rez);

if(DB::affectedcount() > 0) {
  $result = array('result' => true);
}
else error_message('RESERVATION_NOT_FOUND');
