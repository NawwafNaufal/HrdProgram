-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 23, 2024 at 08:03 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `programhrd`
--

-- --------------------------------------------------------

--
-- Table structure for table `absen_karyawan`
--

CREATE TABLE `absen_karyawan` (
  `id` varchar(50) NOT NULL,
  `id_status` varchar(50) DEFAULT NULL,
  `nama` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bonuses`
--

CREATE TABLE `bonuses` (
  `bonus_id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  `bonus_year` year DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bonuses`
--

INSERT INTO `bonuses` (`bonus_id`, `employee_id`, `bonus_year`) VALUES
(1, 1, 2023),
(2, 2, 2023),
(3, 4, 2023);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int NOT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `email`) VALUES
(1, 'Naufal', 'Nawwaf@gmail.com'),
(3, 'Naufal', 'Nawwaf@gmail.com');

--
-- Triggers `customer`
--
DELIMITER $$
CREATE TRIGGER `log_after_employee_insert` AFTER INSERT ON `customer` FOR EACH ROW BEGIN
    INSERT INTO customer_logs (log_id,old_customer_name, old_email,log_time)
    VALUES (NEW.customer_id, NEW.customer_name,NEW.email, NOW());
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `customer_logs`
--

CREATE TABLE `customer_logs` (
  `log_id` int NOT NULL,
  `old_customer_name` varchar(100) DEFAULT NULL,
  `old_email` varchar(100) DEFAULT NULL,
  `log_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer_logs`
--

INSERT INTO `customer_logs` (`log_id`, `old_customer_name`, `old_email`, `log_time`) VALUES
(1, '1', 'Naufal', '2024-09-19 04:36:15'),
(3, 'Naufal', 'Nawwaf@gmail.com', '2024-09-19 04:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `department_id` int NOT NULL,
  `department_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`department_id`, `department_name`) VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Sales');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `profit` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employee_id`, `name`, `department_id`, `salary`, `profit`) VALUES
(1, 'John Doe', 1, 55000, 50000),
(2, 'Jane Smith', 2, 65000, 50000),
(3, 'Alice Johnson', 2, 72000, 50000),
(4, 'Bob Williams', 1, 80000, 50000),
(5, 'Charlie Brown', 3, 90000, 50000),
(6, 'Emily Davis', 2, 48000, 50000),
(7, 'Frank White', 2, 54000, 50000),
(8, 'Grace Green', 2, 67000, 80000),
(9, 'Henry Adams', 3, 34000, 80000),
(10, 'Panasonic', 2, 48930, 100000),
(11, 'Panasonic', 2, 48930, 85000),
(12, 'Panasonic', 2, 48930, 50000),
(13, 'Panasonic', 2, 48930, 100000);

--
-- Triggers `employees`
--
DELIMITER $$
CREATE TRIGGER `before_insert_profit` BEFORE INSERT ON `employees` FOR EACH ROW BEGIN
        IF NEW.profit < 50000 THEN
            SET NEW.profit = 100000;
        end if;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employee_data`
--

CREATE TABLE `employee_data` (
  `id` varchar(30) NOT NULL,
  `id_jabatan` varchar(30) DEFAULT NULL,
  `bagian` varchar(30) DEFAULT NULL,
  `kelompok` int DEFAULT NULL,
  `id_kp` varchar(30) DEFAULT NULL,
  `kontrak` varchar(50) DEFAULT NULL,
  `keterangan_kontrak` int DEFAULT NULL,
  `bpjs_kategori` varchar(30) DEFAULT NULL,
  `awal_kontrak` date DEFAULT NULL,
  `akhir_kontrak` date DEFAULT NULL,
  `mulai_kerja` date DEFAULT NULL,
  `akhir_kerja` date DEFAULT NULL,
  `kpj` varchar(50) DEFAULT NULL,
  `kode_bag` int DEFAULT NULL,
  `nik` varchar(30) DEFAULT NULL,
  `id_personal_data` varchar(50) DEFAULT NULL,
  `id_jenis` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employee_data`
--

INSERT INTO `employee_data` (`id`, `id_jabatan`, `bagian`, `kelompok`, `id_kp`, `kontrak`, `keterangan_kontrak`, `bpjs_kategori`, `awal_kontrak`, `akhir_kontrak`, `mulai_kerja`, `akhir_kerja`, `kpj`, `kode_bag`, `nik`, `id_personal_data`, `id_jenis`) VALUES
('K001', 'J001', 'Surime', 3, 'J001', '3', 2, 'Aktif', '2024-09-03', '2024-09-03', '2024-09-03', '2024-09-03', 'Jah', 43743763, '437376367', 'K001', 'J001');

--
-- Triggers `employee_data`
--
DELIMITER $$
CREATE TRIGGER `before_insert_employee_data` BEFORE INSERT ON `employee_data` FOR EACH ROW BEGIN
    DECLARE new_id VARCHAR(10);
    DECLARE last_id INT;

    SELECT COALESCE(MAX(CAST(SUBSTRING(id, 2) AS UNSIGNED)), 0) INTO last_id
    FROM employee_data;

    IF last_id = 0 THEN
        SET new_id = 'K001';
    ELSE
        SET new_id = CONCAT('K', LPAD(last_id + 1, 3, '0'));
    END IF;

    SET NEW.id = new_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `hubung_antar_data` BEFORE INSERT ON `employee_data` FOR EACH ROW BEGIN
    DECLARE new_id VARCHAR(10);
    DECLARE last_id INT;

    SELECT COALESCE(MAX(CAST(SUBSTRING(id, 2) AS UNSIGNED)), 0) INTO last_id
    FROM employee_data;

    IF last_id = 0 THEN
        SET new_id = 'K001';
    ELSE
        SET new_id = CONCAT('K', LPAD(last_id + 1, 3, '0'));
    END IF;

    SET NEW.id_personal_data = new_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employee_log`
--

CREATE TABLE `employee_log` (
  `id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  `nama_after_insert` varchar(100) DEFAULT NULL,
  `waktu` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employee_log`
--

INSERT INTO `employee_log` (`id`, `employee_id`, `nama_after_insert`, `waktu`) VALUES
(1, 4, 'Jajang', '2024-09-19'),
(2, 5, 'Nurul', '2024-09-19'),
(3, 6, 'UCUP', '2024-09-19');

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id` varchar(30) NOT NULL,
  `jabatan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id`, `jabatan`) VALUES
('J001', 'Direktur'),
('K002', 'Manager'),
('K003', 'Asst Manager');

--
-- Triggers `jabatan`
--
DELIMITER $$
CREATE TRIGGER `before_insert_jabatan` BEFORE INSERT ON `jabatan` FOR EACH ROW BEGIN
    DECLARE new_id VARCHAR(10);
    DECLARE last_id INT;

    SELECT COALESCE(MAX(CAST(SUBSTRING(id, 2) AS UNSIGNED)), 0) INTO last_id
    FROM jabatan;

    IF last_id = 0 THEN
        SET new_id = 'J001';
    ELSE
        SET new_id = CONCAT('K', LPAD(last_id + 1, 3, '0'));
    END IF;

    SET NEW.id = new_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `jabatan_potong_kepala`
--

CREATE TABLE `jabatan_potong_kepala` (
  `id` varchar(50) NOT NULL,
  `jabatan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jabatan_potong_kepala`
--

INSERT INTO `jabatan_potong_kepala` (`id`, `jabatan`) VALUES
('J001', 'Ketua Kelompok'),
('J002', 'Wakil Ketua'),
('J003', 'Anggota');

-- --------------------------------------------------------

--
-- Table structure for table `jenis`
--

CREATE TABLE `jenis` (
  `id` varchar(30) NOT NULL,
  `jenis` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jenis`
--

INSERT INTO `jenis` (`id`, `jenis`) VALUES
('J001', 'Staff'),
('J002', 'Non Staff');

-- --------------------------------------------------------

--
-- Table structure for table `karyawan`
--

CREATE TABLE `karyawan` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `karyawan`
--

INSERT INTO `karyawan` (`id`, `name`) VALUES
(1, 'Jajang'),
(2, 'Nurul'),
(3, 'UCUP'),
(4, 'Jajang'),
(5, 'Nurul'),
(6, 'UCUP');

--
-- Triggers `karyawan`
--
DELIMITER $$
CREATE TRIGGER `after_insert` AFTER INSERT ON `karyawan` FOR EACH ROW BEGIN
        INSERT INTO employee_log
            SET employee_id = NEW.id,
                nama_after_insert = NEW.name,
                waktu = NOW();
    end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `logs_pesan`
--

CREATE TABLE `logs_pesan` (
  `id` int NOT NULL,
  `id_pesanan` int DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `log_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logs_pesan`
--

INSERT INTO `logs_pesan` (`id`, `id_pesanan`, `username`, `log_time`) VALUES
(1, 2, 'naufal@localhost', '2024-09-19');

-- --------------------------------------------------------

--
-- Table structure for table `logs_price_product`
--

CREATE TABLE `logs_price_product` (
  `id` int NOT NULL,
  `new_price` int DEFAULT NULL,
  `old_price` int DEFAULT NULL,
  `tanggal` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logs_price_product`
--

INSERT INTO `logs_price_product` (`id`, `new_price`, `old_price`, `tanggal`) VALUES
(2, 7000, 5000, '2024-09-20 03:47:45');

-- --------------------------------------------------------

--
-- Table structure for table `log_employee`
--

CREATE TABLE `log_employee` (
  `id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  `old_nama_depan` varchar(50) DEFAULT NULL,
  `new_nama_depan` varchar(50) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `log_employee`
--

INSERT INTO `log_employee` (`id`, `employee_id`, `old_nama_depan`, `new_nama_depan`, `tanggal`) VALUES
(1, 1, 'Mulyono', 'Pure Life', '2024-09-18 15:30:46');

-- --------------------------------------------------------

--
-- Table structure for table `nestle`
--

CREATE TABLE `nestle` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `nestle`
--

INSERT INTO `nestle` (`id`, `name`) VALUES
(1, 'Pure Life'),
(2, 'Bj habibie');

--
-- Triggers `nestle`
--
DELIMITER $$
CREATE TRIGGER `update_employee_log` AFTER UPDATE ON `nestle` FOR EACH ROW begin
    insert into log_employee
        set employee_id = OLd.id,
            old_nama_depan = OlD.name,
            new_nama_depan = NEW.name,
            tanggal = now();
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `amount`) VALUES
(1, 101, '2024-01-15', '150.00'),
(2, 102, '2024-03-22', '200.00'),
(3, 103, '2024-05-30', '250.00'),
(4, 104, '2024-07-19', '300.00'),
(5, 105, '2024-09-10', '350.00');

-- --------------------------------------------------------

--
-- Table structure for table `personal_data`
--

CREATE TABLE `personal_data` (
  `id` varchar(20) NOT NULL,
  `nik` varchar(50) DEFAULT NULL,
  `nama_karyawan` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(100) DEFAULT NULL,
  `pendidikan` varchar(100) DEFAULT NULL,
  `id_status` varchar(50) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `alamat` text,
  `no_hp` int DEFAULT NULL,
  `usia` int DEFAULT NULL,
  `asal` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `personal_data`
--

INSERT INTO `personal_data` (`id`, `nik`, `nama_karyawan`, `jenis_kelamin`, `pendidikan`, `id_status`, `tanggal_lahir`, `alamat`, `no_hp`, `usia`, `asal`) VALUES
('K001', 'wdsds', 'ssdsd', 'Jantan', 's', 'S001', '2024-09-03', 'wd', 1234, 23, 'asd');

--
-- Triggers `personal_data`
--
DELIMITER $$
CREATE TRIGGER `before_insert_your_table` BEFORE INSERT ON `personal_data` FOR EACH ROW BEGIN
    DECLARE new_id VARCHAR(10);
    DECLARE last_id INT;

    SELECT COALESCE(MAX(CAST(SUBSTRING(id, 2) AS UNSIGNED)), 0) INTO last_id
    FROM personal_data;

    IF last_id = 0 THEN
        SET new_id = 'K001';
    ELSE
        SET new_id = CONCAT('K', LPAD(last_id + 1, 3, '0'));
    END IF;

    SET NEW.id = new_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `pesan`
--

CREATE TABLE `pesan` (
  `id` int NOT NULL,
  `product_name` varchar(40) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `order_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pesan`
--

INSERT INTO `pesan` (`id`, `product_name`, `quantity`, `order_date`) VALUES
(2, 'Keyboard', 3, NULL);

--
-- Triggers `pesan`
--
DELIMITER $$
CREATE TRIGGER `after_insert_pesan` AFTER INSERT ON `pesan` FOR EACH ROW BEGIN
       INSERT INTO logs_pesan (id_pesanan, username, log_time)
           VALUES (NEW.id,CURRENT_USER(),NOW());
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `nama_product` varchar(100) DEFAULT NULL,
  `stok` int DEFAULT NULL,
  `price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `nama_product`, `stok`, `price`) VALUES
(1, 'Aqua', 30, 3000),
(2, 'Le Minerale', 2, 7000),
(3, 'Aqua', 50, NULL),
(4, 'Le Minerale', 64, NULL);

--
-- Triggers `product`
--
DELIMITER $$
CREATE TRIGGER `price` AFTER UPDATE ON `product` FOR EACH ROW BEGIN
       IF OLD.price <> NEW.price
           THEN INSERT INTO logs_price_product SET id = NEW.id,
                                          old_price = OLD.price,
                                          new_price =NEW.price,
                                          tanggal = NOW();
        END IF;
    END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`) VALUES
('S001', 'Menikah'),
('S002', 'Belum Menikah'),
('S003', 'K/1'),
('S004', 'K/2'),
('S005', 'K/3');

-- --------------------------------------------------------

--
-- Table structure for table `status_absen`
--

CREATE TABLE `status_absen` (
  `id` varchar(50) NOT NULL,
  `status` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `status_absen`
--

INSERT INTO `status_absen` (`id`, `status`) VALUES
('S001', 'Hadir'),
('S002', 'Izin'),
('S003', 'Alpha'),
('S004', 'Cuti');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `transaction_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `transaction_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`transaction_id`, `product_id`, `quantity`, `transaction_date`) VALUES
(1, 2, 2, '2024-09-20 03:49:18');

--
-- Triggers `transaksi`
--
DELIMITER $$
CREATE TRIGGER `transaksi_logs` AFTER INSERT ON `transaksi` FOR EACH ROW BEGIN
        UPDATE product
         SET stok = stok - NEW.quantity
         WHERE id = NEW.product_id;
    END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(30) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
('U001', 'Pure Life', 'strafoodhrd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absen_karyawan`
--
ALTER TABLE `absen_karyawan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_absen` (`id_status`);

--
-- Indexes for table `bonuses`
--
ALTER TABLE `bonuses`
  ADD PRIMARY KEY (`bonus_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_logs`
--
ALTER TABLE `customer_logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `employee_data`
--
ALTER TABLE `employee_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_employee_data` (`id_jabatan`),
  ADD KEY `fk_personaldata` (`id_personal_data`),
  ADD KEY `fk_jabatan` (`id_kp`),
  ADD KEY `fk_jenis` (`id_jenis`);

--
-- Indexes for table `employee_log`
--
ALTER TABLE `employee_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jabatan_potong_kepala`
--
ALTER TABLE `jabatan_potong_kepala`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jenis`
--
ALTER TABLE `jenis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs_pesan`
--
ALTER TABLE `logs_pesan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs_price_product`
--
ALTER TABLE `logs_price_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log_employee`
--
ALTER TABLE `log_employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nestle`
--
ALTER TABLE `nestle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `personal_data`
--
ALTER TABLE `personal_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personal_data` (`id_status`);

--
-- Indexes for table `pesan`
--
ALTER TABLE `pesan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_absen`
--
ALTER TABLE `status_absen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bonuses`
--
ALTER TABLE `bonuses`
  MODIFY `bonus_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customer_logs`
--
ALTER TABLE `customer_logs`
  MODIFY `log_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `employee_log`
--
ALTER TABLE `employee_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `karyawan`
--
ALTER TABLE `karyawan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `logs_pesan`
--
ALTER TABLE `logs_pesan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `logs_price_product`
--
ALTER TABLE `logs_price_product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `log_employee`
--
ALTER TABLE `log_employee`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nestle`
--
ALTER TABLE `nestle`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pesan`
--
ALTER TABLE `pesan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `transaction_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absen_karyawan`
--
ALTER TABLE `absen_karyawan`
  ADD CONSTRAINT `fk_absen` FOREIGN KEY (`id_status`) REFERENCES `status_absen` (`id`);

--
-- Constraints for table `bonuses`
--
ALTER TABLE `bonuses`
  ADD CONSTRAINT `bonuses_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`);

--
-- Constraints for table `employee_data`
--
ALTER TABLE `employee_data`
  ADD CONSTRAINT `fk_employee_data` FOREIGN KEY (`id_jabatan`) REFERENCES `jabatan` (`id`),
  ADD CONSTRAINT `fk_jabatan` FOREIGN KEY (`id_kp`) REFERENCES `jabatan_potong_kepala` (`id`),
  ADD CONSTRAINT `fk_jenis` FOREIGN KEY (`id_jenis`) REFERENCES `jenis` (`id`),
  ADD CONSTRAINT `fk_personaldata` FOREIGN KEY (`id_personal_data`) REFERENCES `personal_data` (`id`);

--
-- Constraints for table `personal_data`
--
ALTER TABLE `personal_data`
  ADD CONSTRAINT `fk_personal_data` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
