<?php
$id = $input['id'];

DB::delete('pokoje', 'id_pokoju = %i', $id);
$result = array('result' => true);
