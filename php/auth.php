<?php
// logowanie i rejestracja
$path = './auth/';

if(!empty($request)) {                   // nie ma pustego zapytania wiec musi sprawdzic zeby errora nie sypnelo
  if($request[0] == 'login'){
    include_once($path.'login.php');
  }
  else if($request[0] == 'register'){    // TODO: zrobic weryfikacje na mail
    include_once($path.'register.php');
  }
  else if($request[0] == 'mydata'){
    if(checkTokenAccess('klient'))
      include_once($path.'mydata.php');
  }
  else if($request[0] == 'login_prac'){
    include_once($path.'loginprac.php');
  }
  else if($request[0] == 'login_szef'){
    include_once($path.'loginszef.php');
  }
  else error_message('UNDEFINED_FUNCTION');
}
else error_message('UNDEFINED_FUNCTION');


