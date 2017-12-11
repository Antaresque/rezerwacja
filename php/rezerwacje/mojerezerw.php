<?php
$id = getPayload()->id;

$data = DB::query('SELECT * FROM rezerwacje WHERE id_klienta = %i', $id);

if(DB::count() > 0){
  $result = $data;
}
else{
  error_message('NO_RESULTS');
}
