<?php
// funkcja do dopisywania wiadomości
function error_message($result, $value) {
  $msg_arr = array(
    'NO_RESULTS' => 'Brak wyników',                   // brak wyników
    'FILE_NOT_FOUND' => 'Nie znaleziono tabeli',      // nie znaleziono pliku/tabeli
    'UNDEFINED_FUNCTION' => 'Nieznana funkcja',       // jeżeli nie znaleziono żadnej funkcji
    'LOGIN_NOT_FOUND' => 'Nieprawidłowy login/hasło', // nie znaleziono podanego loginu w bazie danych
    'WRONG_PASS' => 'Nieprawidłowy login/hasło',      // podano złe hasło
    'LOGIN_TAKEN' => 'Login jest już zajęty',         // zajęty login przy rejestracji
    'EMAIL_TAKEN' => 'E-mail jest już zajęty'        // zajęty e-mail przy rejestracji
  );
  // WIADOMOŚCI DO ERRORÓW TUTAJ ^^^^^

  if(!isset($result['message']))
    $result = array('message' => $msg_arr[$value]); // jeżeli wiadomość nie istnieje, zrób tablicę z wiadomością błędu
  else
    $result['message'][] = $msg_arr[$value]; // jeżeli istnieje dopisz jako kolumnę w tablicy

  return $result;
}
