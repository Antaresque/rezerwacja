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
(2, 'Alex', 'Yakumo', '565656565', 'olekfer@yahoo.pl', '$2y$11$6lUwrAvWMYPbFF/.ydLZF.GlLEULorF3fUrOjK4qrFjSjv8XQM19.', 'Uczeń'),
(3, 'Tadeusz', 'Koniuszko', '123456789', 'mail1@mail.com', '$2y$11$xdW/4pPTqaXm.RvIYMtnkuMGGmQSRNFK8juyl2LBrtpz2C7YfUBBW', 'Klient1'),
(4, 'Mariusz', 'Lewarski', '987654321', 'mail2@mail.com', '$2y$11$/MrbxpqYDJXeufl7mi8F8e3uxJNJ4oKQJEUH44Fm8de67mQXdqPva', 'Klient2'),
(5, 'Miłobrat', 'Wszędobylski', '478601647', 'mail3@mail.com', '$2y$11$TAlkALRzzWfxtlYmcnZWVeJrup8DjnigKlQ4QKnZENcVyOh8UTwpm', 'Klient3'),
(6, 'Mysław', 'Mazowiecki', '572905739', 'mail4@mail.com', '$2y$11$HnV6TMu66Fa0NDNYRIp1wOX8i8Uj4qTb91zwT34TEB3hq.Kd00/w2', 'Klient4'),
(7, 'Przemysław', 'Yamato', '608376840', 'mail5@mail.com', '$2y$11$ubd0ZQQYfuhbX/b51.9JjeMuE7uWksanYEfxMknQIDm87/R/fko5G', 'Klient5'),
(8, 'Dijkstra', 'Woroszyłow', '682057386', 'mail6@mail.com', '$2y$11$9zitmPGHpHtX59PMpOYBpuTnot9E1wITpLjOwTc0N.zNIGoFBMCaq', 'Klient6'),
(9, 'Esteban Hulio Montoya', 'Dela Rosa Ramirez', '739672066', 'mail7@mail.com', '$2y$11$h9GUS51XzkJ2yU5Azi3.1uEHyaBgs1PD.RC8lsyNjrOYZCH4IsQoK', 'Klient7'),
(10, 'Cirno', 'Scarlet', '999999999', 'mail8@mail.com', '$2y$11$k2fCdrSKn5apCtFvGncBNOz1VEzjP74pSBdopWtBYjzV6Y0D4LL6i', 'Klient8');

-- --------------------------------------------------------

--
-- Zrzut danych tabeli `pokoje`
--

INSERT INTO `pokoje` (`id_pokoju`, `typ_pokoju`, `cena_noc`) VALUES
(1, 'jednoosobowy', '30'),
(2, 'jednoosobowy', '30'),
(3, 'jednoosobowy', '40'),
(4, 'dwuosobowy', '60'),
(5, 'dwuosobowy', '60'),
(6, 'dwuosobowy', '80'),
(7, 'trzyosobowy', '90'),
(8, 'trzyosobowy', '90'),
(9, 'trzyosobowy', '110'),
(10, 'czteroosobowy', '120'),
(11, 'czteroosobowy', '120'),
(12, 'czteroosobowy', '140'),
(13, 'pięcioosobowy', '150'),
(14, 'pięcioosobowy', '150'),
(15, 'pięcioosobowy', '170');

-- --------------------------------------------------------

--
-- Zrzut danych tabeli `pracownicy`
--

INSERT INTO `pracownicy` (`id_pracownika`, `imie`, `nazwisko`, `nr_telefonu`, `email`, `adres`, `zatrudniony`, `pensja`, `haslo`, `login`, `funkcja`) VALUES
(1, 'Janusz', 'Czorny', '777 777 777', 'janusz@janusz.pl', 'Lodowice, ul Lodowa 9', '2017-12-09', '12000', '$2y$11$cfwX0EE7tLMY16mTBRJlzOHRaBtyzM9l4cfqpR2ccULHlAp8Fcj46', 'Szef', 'szef'),
(2, 'Arkadiusz', 'Chmielnicki', '888 888 888', 'arku@gdyniu.kś', 'Lodowice, ul Świetlna 3', '2017-12-10', '2000', '$2y$11$6lUwrAvWMYPbFF/.ydLZF.GlLEULorF3fUrOjK4qrFjSjv8XQM19.', 'Pracownik1', 'pracownik'),
(3, 'Sergiusz', 'Mysielnicki', '132 645 879', 'serek@onet.pl', 'Lodowice, ul Nuklearna 6', '2017-12-10', '2000', '$2y$11$xdW/4pPTqaXm.RvIYMtnkuMGGmQSRNFK8juyl2LBrtpz2C7YfUBBW', 'Pracownik2', 'pracownik');


-- --------------------------------------------------------

--
-- Zrzut danych tabeli `rezerwacje`
--

INSERT INTO `rezerwacje` (`id_rezerwacji`, `id_klienta`, `id_pokoju`, `id_pracownika`, `pocz_rezerwacji`, `kon_rezerwacji`, `data_rejestracji`) VALUES
(1, 3, 1, 2, '2017-12-09', '2017-12-10', '2017-12-09 22:40:54'),
(2, 4, 2, 2, '2017-12-08', '2017-12-15', '2017-12-10 18:37:22'),
(3, 5, 3, 2, '2017-12-07', '2017-12-09', '2017-12-10 18:38:35'),
(4, 6, 4, 3, '2017-12-11', '2017-12-22', '2017-12-10 18:39:49'),
(5, 10, 15, 3, '2017-12-01', '2017-12-31', '2017-12-10 18:40:56');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
