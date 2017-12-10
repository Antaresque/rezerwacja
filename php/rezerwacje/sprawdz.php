<?php

// sprawdz czy pokoj nie jest zajety tego dnia
// sprawdz czy daty nie sa przed data aktualna
$date_now = strtotime('today');

$date_start = strtotime($input['date_start']);
$date_end = strtotime($input['date_end']);
$id_pokoju = $input['id_pokoju'];

if($date_start > $date_end) // data rozpoczecia pozniejsza od daty zakonczenia
  error_message("WRONG_RESERVATION_DATE");
else if($date_start < $date_now || $date_end < $date_now)
  error_message("TOO_OLD_DATE");
else {
  $date_start = date('Y-m-d', $date_start);
  $date_end = date('Y-m-d', $date_end);

  $data = DB::query('SELECT * FROM rezerwacje WHERE id_pokoju = %i
                                              AND pocz_rezerwacji <= %s
                                              AND kon_rezerwacji >= %s', $id_pokoju, $date_end, $date_start);

  if(DB::count() > 0){
    error_message("ALREADY_RESERVED");

    for($i = 0; $i < DB::count(); $i++) {
      $pocz = $data[$i]['pocz_rezerwacji'];
      $kon = $data[$i]['kon_rezerwacji'];
      $date_temp = $pocz.' - '.$kon;
      $result['message'] += ' '.$date_temp.' ';
    }
  }
  else{
    $result = array("result" => true);
  }
}
