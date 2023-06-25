-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Jún 25. 18:31
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `eszkozok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eszkozok`
--

CREATE TABLE `eszkozok` (
  `ID` int(11) NOT NULL,
  `statusz` enum('aktiv','torolve') NOT NULL,
  `nev` varchar(300) NOT NULL,
  `kep` varchar(300) NOT NULL,
  `alt` varchar(300) NOT NULL,
  `ar` int(11) NOT NULL,
  `darab` int(11) NOT NULL,
  `datum` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `eszkozok`
--

INSERT INTO `eszkozok` (`ID`, `statusz`, `nev`, `kep`, `alt`, `ar`, `darab`, `datum`) VALUES
(1, 'aktiv', 'Monitor', 'uploads/monitor.jpg', 'monitor', 100000, 8, '2023-04-12 19:20:53'),
(2, 'aktiv', 'Billentyűzet', 'uploads/monitor.jpg', 'billentyuzet', 10000, 6, '2023-04-12 19:20:53'),
(3, 'aktiv', 'Egér', 'uploads/monitor.jpg', 'eger', 2000, 13, '2023-04-12 19:22:23'),
(4, 'aktiv', 'Nyomtató', 'uploads/monitor.jpg', 'nyomtato', 20000, 3, '2023-04-12 19:22:23'),
(5, 'torolve', 'Hangszóró', 'uploads/monitor.jpg', 'hangszoro', 5000, 2, '2023-04-12 19:24:17'),
(6, 'aktiv', 'Web kamera', 'uploads/monitor.jpg', 'webkamera', 10000, 0, '2023-04-12 19:24:17'),
(7, 'aktiv', 'Router', 'uploads/monitor.jpg', 'router', 15000, 2, '2023-04-12 19:26:28'),
(8, 'aktiv', 'Külső winchester', 'uploads/monitor.jpg', 'kulsowinchester', 20000, 1, '2023-04-12 19:26:28'),
(9, 'aktiv', 'új monitor', 'uploads/18_17_13_monitor.jpg', '- nincs -', 10, 1, '0000-00-00 00:00:00'),
(10, 'aktiv', 'eszköz', 'uploads/18_22_43_monitor.jpg', '- nincs -', 10, 1, '0000-00-00 00:00:00');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `eszkozok`
--
ALTER TABLE `eszkozok`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `eszkozok`
--
ALTER TABLE `eszkozok`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
