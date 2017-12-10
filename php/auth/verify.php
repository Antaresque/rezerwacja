<?php
$token = $input['token'];

$data = getPayload();

if($data != false){
  $id = $data->id;
  DB::update('klienci', array('aktywny' => 1), 'id_klienta = %i', $id);
}
