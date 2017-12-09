<?php
use \Firebase\JWT\JWT;
$id = $input['id'];
$result = DB::queryFirstRow("SELECT * FROM klienci WHERE id_klienta = %i", $id);

