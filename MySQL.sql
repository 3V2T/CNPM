CREATE DATABASE `caro`;
USE `caro`;
CREATE TABLE `caro`.`user`(
    `ID` VARCHAR(10) NOT NULL,
    `NAME` VARCHAR(20) NULL DEFAULT NULL,
    `USERNAME` VARCHAR(20) NOT NULL UNIQUE,
    `PASSWORD` VARCHAR(30) NOT NULL,
    `EMAIL` VARCHAR(50) NULL DEFAULT NULL,
    `ADMIN` BOOLEAN NOT NULL DEFAULT FALSE,
    `SCORE` INT NULL DEFAULT NULL,
    PRIMARY KEY(`ID`)
) ENGINE = InnoDB;
CREATE TABLE `caro`.`game`(
    `ID` VARCHAR(10) NOT NULL,
    `PLAYER_ID` VARCHAR(10) NOT NULL,
    `OPPONENT_NAME` VARCHAR(20) NULL DEFAULT NULL,
    `SCORE` INT NOT NULL DEFAULT '0',
    `GAME_TYPE` VARCHAR(10) NOT NULL,
    `DIFFICULTY` INT NOT NULL,
    `PLAY_TIME` INT NOT NULL,
    `START_TIME` DATETIME NOT NULL,
    `STATUS` VARCHAR(10) NOT NULL,
    `DATA` JSON NOT NULL,
    `NEXTMOVE` BOOLEAN NULL DEFAULT NULL,
    PRIMARY KEY(`ID`),
    FOREIGN KEY(`PLAYER_ID`) REFERENCES `user`(`ID`)
) ENGINE = InnoDB;
CREATE PROCEDURE `caro`.`themnguoichoi`(
    IN `name` VARCHAR(20),
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50),
    IN `admin` BOOLEAN,
    IN `score` INT
)
BEGIN
    INSERT INTO `user`(`NAME`, `USERNAME`, `PASSWORD`, `EMAIL`, `ADMIN`, `SCORE`) VALUES(name, username, password, email, admin, score);
END;
CREATE PROCEDURE `caro`.`suannguoichoi`(
    IN `id` VARCHAR(10),
    IN `name` VARCHAR(20),
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50),
    IN `admin` BOOLEAN,
    IN `score` INT
)
BEGIN
    UPDATE `user` SET `NAME` = name, `USERNAME` = username, `PASSWORD` = password, `EMAIL` = email, `ADMIN` = admin, `SCORE` = score WHERE `ID` = id;
END;
CREATE PROCEDURE `caro`.`xoanguoichoi`(
    IN `id` VARCHAR(10)
)
BEGIN
    DELETE FROM `user` WHERE `ID` = id;
END;
CREATE PROCEDURE `caro`.`xoanguoichoitheousername`(
    IN `username` VARCHAR(20)
)
BEGIN
    DELETE FROM `user` WHERE `USERNAME` = username;
END;
CREATE PROCEDURE `caro`.`suannguoichoitheousername`(
    IN `username` VARCHAR(20),
    IN `name` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50),
    IN `admin` BOOLEAN,
    IN `score` INT
)
BEGIN
    UPDATE `user` SET `NAME` = name, `PASSWORD` = password, `EMAIL` = email, `ADMIN` = admin, `SCORE` = score WHERE `USERNAME` = username;
END;