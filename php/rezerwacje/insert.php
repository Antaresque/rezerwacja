<?php
$date_start = strtotime($input['date_start']);
$date_end = strtotime($input['date_end']);
$id_pokoju = $input['id_pokoju'];
$id_klienta = getPayload()->id;

if($date_start > $date_end)
  error_message("WRONG_RESERVATION_DATE");
else if(!$id_klienta)
  http_response_code(401);
else {
  $date_start = date('Y-m-d', $date_start);
  $date_end = date('Y-m-d', $date_end);

  $data = DB::query('SELECT *
                    FROM rezerwacje
                    WHERE id_pokoju = %i AND
                          id_pokoju NOT IN (SELECT id_pokoju
                                            FROM rezerwacje
                                            WHERE %s >= pocz_rezerwacji
                                            || %s <= kon_rezerwacji)', $id_pokoju, $date, $date);


  $haslo = generate_hash($input['pass']);
  $imie = $input['imie'];
  $nazwisko = $input['nazwisko'];
  $nr_tel = $input['telefon'];

  DB::insert('klienci', array(
    'imie' => $imie,
    'nazwisko' => $nazwisko,
    'nr_tel' => $nr_tel,
    'email' => $email,
    'login' => $login,
    'haslo' => $haslo));
  $result = array('result' => true);
}
// TODO: zrobic weryfikacje na mail
