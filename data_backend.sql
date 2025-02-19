-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2025 at 06:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`username`, `email`, `password`) VALUES
('dhanm', 'dhanm@gmail.com', '1234'),
('vebbox', 'vebbox@gmail.com', '12345'),
('vebbox', 'vebbox@gmail.com', '12345'),
('vebbox', 'vebbox@gmail.com', '0987'),
('dhanam', 'dhanam@gmail.com', '1234'),
('akshu', 'akshu@gmail.com', '1234567'),
('dhanavardhini', 'dhanavardhini@gmail.com', '09876'),
('dhanavardhini', 'dhanavardhini@gmail.com', '09876'),
('mokshini', 'mokshiniezhil@gmail.com', 'moks112'),
('anas', 'anas@gmail.com', '12345'),
('anu', 'anu@gmail.com', '12345'),
('Abdul Halik jinnna', 'abcd@gmail.com', '123456'),
('sandy', 'sandy@gmail.com', '1234567');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
