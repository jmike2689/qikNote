DROP DATABASE IF EXISTS sequelize_passport;
CREATE DATABASE sequelize_passport;

DROP DATABASE IF EXISTS note_db;
CREATE DATABASE note_db;

-- USE sequelize_passport

-- CREATE TABLE `users` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `firstname` varchar(255) DEFAULT NULL,
--   `lastname` varchar(255) DEFAULT NULL,
--   `username` text,
--   `about` text,
--   `email` varchar(255) DEFAULT NULL,
--   `password` varchar(255) NOT NULL,
--   `last_login` datetime DEFAULT NULL,
--   `status` enum('active','inactive') DEFAULT 'active',
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL,
--   PRIMARY KEY (`id`)