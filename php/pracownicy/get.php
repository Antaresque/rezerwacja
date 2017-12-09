<?php
$data = DB::query('SELECT * FROM %b', $tablename);
if(DB::count() > 0) {
  $result = $data;
}
else {
  $result = error_message($result, 'NO_RESULTS');
}
