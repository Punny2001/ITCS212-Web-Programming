
CREATE DATABASE IF NOT EXISTS `itcs212-1`;
USE `itcs212-1`;

CREATE TABLE `personal_info` (
	`StudentID` int(11) PRIMARY KEY NOT NULL ,
    `Firstname` varchar(45),
    `Lastname` VARCHAR(45) NULL,
	`DOB` DATETIME NULL,
	`Mobilephone` VARCHAR(10) NULL
);

INSERT INTO `personal_info`(`StudentID`,`Firstname` ,`Lastname`, `DOB`, `Mobilephone`) VALUES
( 1, 'Robert', 'Dolls', '1985-01-20', '0919998877'),
( 2, 'Peter', 'Jones', '1980-06-10', '0834455667'),
( 3, 'Lily', 'James', '1991-10-20', '0889988776');