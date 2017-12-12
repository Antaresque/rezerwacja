<?php
$id_rez = $input['id'];
$id_prac = getPayload()->id;

$check = DB::update('rezerwacje', array('zatwierdzony' => 1), 'id_rezerwacji = %i', $id_rez);

if(DB::affectedRows() > 0){
  $result = array('result' => true);
  $r_data = DB::queryFirstRow('SELECT * FROM rezerwacje WHERE id_rezerwacji = %i', $id_rez);
  $p_data = DB::queryFirstRow('SELECT * FROM pokoje WHERE id_pokoju = %i', $r_data['id_pokoju']);
  $k_data = DB::queryFirstRow('SELECT * FROM klienci WHERE id_klienta = %i', $r_data['id_klienta']);
  $string = $p_data['id_pokoju'].", w okresie od ".$r_data['pocz_rezerwacji']." do ".$r_data['kon_rezerwacji'];
  mail_message($k_data['email'], 'CONFIRM', $string);
}
else error_message('RESERVATION_NOT_FOUND');
