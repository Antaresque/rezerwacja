<?php
$id = $input['id'];
if(!is_null($input['typ'])) $params = array_merge($params, array('typ_pokoju' => $input['typ']));
if(!is_null($input['cena'])) $params = array_merge($params, array('cena_noc' => $input['cena']));

DB::update('pokoje', $params, 'id_pokoju = %s', $id);

$result = array('result' => true);

