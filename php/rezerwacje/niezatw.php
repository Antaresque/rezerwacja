<?php
$data = DB::query('SELECT * FROM rezerwacje WHERE zatwierdzony = 0'); // TODO: widok jakis ladny na te rzeczy
if(DB::count() > 0) {
  $result = $data;
}
else{
  error_message('NO_RESULTS');
}
