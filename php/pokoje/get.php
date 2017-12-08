<?php
  $data = DB::query('SELECT * FROM %b', $tablename);
    if(DB::count() > 0) {
      $result = $data;
    }
    else{
      $temp = array('message' => 'Brak wyników');
      $result = array_merge($result, $temp);
    }
