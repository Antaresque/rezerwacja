<?php
$date = $input['date'];

$data = DB::query('SELECT *
                   FROM pokoje
                   WHERE id_pokoju NOT IN (SELECT id_pokoju
                                           FROM rezerwacje
                                           WHERE %s >= pocz_rezerwacji
                                           AND %s <= kon_rezerwacji)', $date);

