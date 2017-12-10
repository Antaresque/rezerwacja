<?php
$date = date('Y-m-d', strtotime($input['date']));

if(!is_null($input['page'])) $page = (int)$input['page'];
else $page = 1;

if(!is_null($input['num'])) $num = (int)$input['num'];
else $num = 10;

$params = array(
  'numstart' => $num * ($page - 1), //index od ktorego zaczyna
  'numofrows' => $num,              //ilosc rzedow
  'date' => $date);

$data = DB::query('SELECT *
                   FROM pokoje
                   WHERE id_pokoju NOT IN (SELECT id_pokoju
                                           FROM rezerwacje
                                           WHERE %s_date >= pocz_rezerwacji
                                           && %s_date <= kon_rezerwacji)
                  LIMIT %i_numstart, %i_numofrows',
                  $params);

DB::query('SELECT *
           FROM pokoje
           WHERE id_pokoju NOT IN (SELECT id_pokoju
                                   FROM rezerwacje
                                   WHERE %s >= pocz_rezerwacji
                                   && %s <= kon_rezerwacji)', $date, $date);


if(DB::count() == 0){
  error_message('NO_RESULTS');
}
else{
  $count = DB::count();
  $pages = array(ceil($count/$num));

  $result = array_merge($data, $pages);
}
