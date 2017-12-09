<?php
// logowanie i rejestracja
$path = './auth/';

if(!empty($request)) {                   // nie ma pustego zapytania wiec musi sprawdzic zeby errora nie sypnelo
  if($request[0] == 'login'){             // TODO: login
    include_once($path.'login.php');
  }
  else if($request[0] == 'register'){     // TODO: register (zaszyfrowac haslo)
    include_once($path.'register.php');
  }
  else $result = error_message($result, 'UNDEFINED_FUNCTION');
}
else $result = error_message($result, 'UNDEFINED_FUNCTION');

// mozna oba zrobić z poprzedniego

