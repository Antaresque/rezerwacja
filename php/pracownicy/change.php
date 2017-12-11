<?php
$id = $input['id'];
if(!is_null($input['imie'])) $params = array_merge($params, array('imie' => $input['imie']));
if(!is_null($input['nazwisko'])) $params = array_merge($params, array('nazwisko' => $input['nazwisko']));
if(!is_null($input['nr_telefonu'])) $params = array_merge($params, array('nr_telefonu' => $input['nr_telefonu']));
if(!is_null($input['adres'])) $params = array_merge($params, array('adres' => $input['adres']));
if(!is_null($input['pensja'])) $params = array_merge($params, array('pensja' => $input['pensja']));

DB::update('pokoje', $params, 'id_pracownika = %s', $id);

$result = array('result' => true);

