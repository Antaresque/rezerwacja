<?php
$typ = $input['typ'];
$cena = $input['cena'];

DB::insert('pokoje', array(
      'typ_pokoju' => $typ,
      'cena_noc' => $cena));

$result = array('result' => true);

