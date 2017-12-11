<?php
$id = $input['id'];

DB::delete('pracownicy', 'id_pracownika = %i', $id);
$result = array('result' => true);
