<?php
$id = $input['id'];
DB::$error_handler = false;

DB::delete('pokoje', 'id_pokoju = %i', $id);

if(DB::affectedRows() > 0)
  $result = array('result' => true);
else
  error_message('DELETE_ERROR');

DB::$error_handler = true;
