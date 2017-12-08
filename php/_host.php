<?php
  require_once('_meekrodb.2.3.class.php');

  DB::$host = "localhost";
  DB::$user = "root";
  DB::$password = "";
  DB::$dbName = "hotel";
  DB::$encoding = 'utf8';

  header('Access-Control-Allow-Origin: *'); //only for localhost
  header('Access-Control-Allow-Headers: Content-Type, Authorization'); //token check
  header('Content-Type: application/json'); //json output
