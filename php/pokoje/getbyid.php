<?php
$id = $input['id'];
$data = DB::queryFirstRow('SELECT * FROM pokoje WHERE id_pokoju = %i', $id);

if(is_null($data)){
  error_message('ROOM_NOT_EXIST');
}
else{
  $result = $data;
}
