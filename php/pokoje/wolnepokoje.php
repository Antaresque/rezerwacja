<?php
$date = date('Y-m-d', strtotime($input['date']));

$data = DB::query('SELECT *
                   FROM pokoje
                   WHERE id_pokoju NOT IN (SELECT id_pokoju
                                           FROM rezerwacje
                                           WHERE %s >= pocz_rezerwacji
                                           && %s <= kon_rezerwacji)', $date, $date);

if(DB::count() > 0) {
  $result = $data;
}
else {
  error_message('FREE_ROOMS_NOT_FOUND');
}

