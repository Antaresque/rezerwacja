-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Gru 2017, 23:41
-- Wersja serwera: 10.1.26-MariaDB
-- Wersja PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `hotel`
--

--
-- Zrzut danych tabeli `klienci`
--

INSERT INTO `klienci` (`id_klienta`, `imie`, `nazwisko`, `nr_tel`, `email`, `haslo`, `login`) VALUES
(1, 'Yanush', 'Lisiasty', '656565656', 'adijedendwa@gmail.com', '$2y$11$cfwX0EE7tLMY16mTBRJlzOHRaBtyzM9l4cfqpR2ccULHlAp8Fcj46', 'Miszcz'),
(2, 'Alex', 'Yakumo', '565656565', 'olekfer@yahoo.pl', '$2y$11$6lUwrAvWMYPbFF/.ydLZF.GlLEULorF3fUrOjK4qrFjSjv8XQM19.', 'Uczeń');

-- --------------------------------------------------------

--
-- Zrzut danych tabeli `pokoje`
--

INSERT INTO `pokoje` (`id_pokoju`, `typ_pokoju`, `cena_noc`) VALUES
(1, 'dwuosobowy', '50');

-- --------------------------------------------------------

--
-- Zrzut danych tabeli `pracownicy`
--

INSERT INTO `pracownicy` (`id_pracownika`, `imie`, `nazwisko`, `nr_telefonu`, `email`, `adres`, `zatrudniony`, `pensja`, `haslo`, `login`) VALUES
(1, 'Janusz', 'Czorny', '777 777 777', 'janusz@janusz.pl', 'Lodowice, ul Lodowa 9', '2017-12-09', '2000', 'a', 'Pracownik1');

-- --------------------------------------------------------

--
-- Zrzut danych tabeli `rezerwacje`
--

INSERT INTO `rezerwacje` (`id_rezerwacji`, `id_klienta`, `id_pokoju`, `id_pracownika`, `pocz_rezerwacji`, `kon_rezerwacji`, `data_rejestracji`) VALUES
(1, 1, 1, 1, '2017-12-09', '2017-12-10', '2017-12-09 22:40:54');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
