<?php
$data = DB::query('SELECT * FROM %b', $tablename);
if(DB::count() > 0) {
  $result = $data;
}
else {
  error_message('NO_RESULTS');
}
