<?php
$id_klienta = getPayload()->id;

if(!$id_klienta)
  http_response_code(401);
else {
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

    if(DB::count() > 0) {
      error_message("ALREADY_RESERVED");
      for($i = 0; $i < DB::count(); $i++) {
        $pocz = $data[$i]['pocz_rezerwacji'];
        $kon = $data[$i]['kon_rezerwacji'];
        $date_temp = $pocz.' - '.$kon;
        $result['message'] .= $date_temp.' ';
      }
    }
    else {
      DB::insert('rezerwacje', array(
        'id_klienta' => $id_klienta,
        'id_pokoju' => $id_pokoju,
        'pocz_rezerwacji' => $date_start,
        'kon_rezerwacji' => $date_end));
      $result = array('result' => 'Twoja rezerwacja została przyjęta i czeka na zatwierdzenie');

      $k_data = DB::queryFirstRow('SELECT * FROM klienci WHERE id_klienta = %i', $id_klienta);
      $p_data = DB::queryFirstRow('SELECT * FROM pokoje WHERE id_pokoju = %i', $id_pokoju);
      $email = $k_data['email'];
      $string = 'Numer pokoju :'.$id_pokoju.', Typ pokoju: '.$p_data['typ_pokoju'].', Cena za nocleg: '.$p_data['cena_noc'];
      mail_message($email, 'RESERVATION', $string);
    }
  }
}
