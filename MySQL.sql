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
CREATE VIEW `caro`.`nguoichoi` AS SELECT `ID`, `NAME`, `USERNAME`, `PASSWORD`, `EMAIL`, `SCORE` FROM `user` WHERE `ADMIN` = FALSE;
CREATE VIEW `caro`.`admin` AS SELECT `ID`, `NAME`, `USERNAME`, `PASSWORD`, `EMAIL` FROM `user` WHERE `ADMIN` = TRUE;
CREATE VIEW `caro`.`banchoi` AS SELECT * FROM `game`;
CREATE PROCEDURE `caro`.`dangky`(
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30)
)
INSERT INTO `user`(`USERNAME`, `PASSWORD`) VALUES (username, password);
CREATE PROCEDURE `caro`.`themnguoichoi`(
    IN `id` VARCHAR(10),
    IN `name` VARCHAR(20),
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50),
    IN `admin` BOOLEAN
)
INSERT INTO `user` VALUES (id, name, username, password, email, FALSE);
CREATE PROCEDURE `caro`.`suannguoichoi`(
    IN `id` VARCHAR(10),
    IN `name` VARCHAR(20),
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50),
    IN `admin` BOOLEAN,
    IN `score` INT
)
UPDATE `user` SET `NAME` = name, `USERNAME` = username, `PASSWORD` = password, `EMAIL` = email, `ADMIN` = admin, `SCORE` = score WHERE `ID` = id;
CREATE PROCEDURE `caro`.`xoanguoichoi`(
    IN `id` VARCHAR(10)
)
DELETE FROM `user` WHERE `ID` = id;
CREATE PROCEDURE `caro`.`xoanguoichoitheousername`(
    IN `username` VARCHAR(20)
)
DELETE FROM `user` WHERE `USERNAME` = username;
CREATE PROCEDURE `caro`.`suannguoichoitheousername`(
    IN `username` VARCHAR(20),
    IN `name` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50),
    IN `admin` BOOLEAN,
    IN `score` INT
)
UPDATE `user` SET `NAME` = name, `PASSWORD` = password, `EMAIL` = email, `ADMIN` = admin, `SCORE` = score WHERE `USERNAME` = username;
CREATE PROCEDURE `caro`.`doimatkhau`(
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30)
)
UPDATE `user` SET `PASSWORD` = password WHERE `USERNAME` = username;
CREATE PROCEDURE `caro`.`themadmin`(
    IN `id` VARCHAR(10),
    IN `name` VARCHAR(20),
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50)
)
INSERT INTO `user` VALUES (id, name, username, password, email, TRUE);
CREATE PROCEDURE `caro`.`suanadmin`(
    IN `id` VARCHAR(10),
    IN `name` VARCHAR(20),
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50)
)
UPDATE `user` SET `NAME` = name, `USERNAME` = username, `PASSWORD` = password, `EMAIL` = email WHERE `ID` = id;
CREATE PROCEDURE `caro`.`suaadmintheousername`(
    IN `username` VARCHAR(20),
    IN `name` VARCHAR(20),
    IN `password` VARCHAR(30),
    IN `email` VARCHAR(50)
)
UPDATE `user` SET `NAME` = name, `PASSWORD` = password, `EMAIL` = email WHERE `USERNAME` = username;
CREATE PROCEDURE `caro`.`xoaadmin`(
    IN `id` VARCHAR(10)
)
DELETE FROM `user` WHERE `ID` = id;
CREATE PROCEDURE `caro`.`xoaadmintheousername`(
    IN `username` VARCHAR(20)
)
DELETE FROM `user` WHERE `USERNAME` = username;
CREATE PROCEDURE `caro`.`thembanchoi`(
    IN `id` VARCHAR(10),
    IN `player_id` VARCHAR(10),
    IN `opponent_name` VARCHAR(20),
    IN `score` INT,
    IN `game_type` VARCHAR(10),
    IN `difficulty` INT,
    IN `play_time` INT,
    IN `start_time` DATETIME,
    IN `status` VARCHAR(10),
    IN `data` JSON,
    IN `nextmove` BOOLEAN
)
INSERT INTO `game` VALUES (id, player_id, opponent_name, score, game_type, difficulty, play_time, start_time, status, data, nextmove);
CREATE PROCEDURE `caro`.`suabanchoi`(
    IN `id` VARCHAR(10),
    IN `score` INT,
    IN `play_time` INT,
    IN `status` VARCHAR(10),
    IN `data` JSON,
    IN `nextmove` BOOLEAN
)
UPDATE `game` SET `SCORE` = score, `PLAY_TIME` = play_time, `STATUS` = status, `DATA` = data, `NEXTMOVE` = nextmove WHERE `ID` = id;
CREATE PROCEDURE `caro`.`suabanchoitheoplayerid`(
    IN `player_id` VARCHAR(10),
    IN `score` INT,
    IN `play_time` INT,
    IN `status` VARCHAR(10),
    IN `data` JSON,
    IN `nextmove` BOOLEAN
)
UPDATE `game` SET `SCORE` = score, `PLAY_TIME` = play_time, `STATUS` = status, `DATA` = data, `NEXTMOVE` = nextmove WHERE `PLAYER_ID` = player_id;
CREATE PROCEDURE `caro`.`suabanchoitheousername`(
    IN `username` VARCHAR(20),
    IN `opponent_name` VARCHAR(20),
    IN `score` INT,
    IN `game_type` VARCHAR(10),
    IN `difficulty` INT,
    IN `play_time` INT,
    IN `start_time` DATETIME,
    IN `status` VARCHAR(10),
    IN `data` JSON,
    IN `nextmove` BOOLEAN
)
UPDATE `game` SET `OPPONENT_NAME` = opponent_name, `SCORE` = score, `GAME_TYPE` = game_type, `DIFFICULTY` = difficulty, `PLAY_TIME` = play_time, `START_TIME` = start_time, `STATUS` = status, `DATA` = data, `NEXTMOVE` = nextmove WHERE `PLAYER_ID` = (SELECT `ID` FROM `user` WHERE `USERNAME` = username);
CREATE PROCEDURE `caro`.`xoabanchoi`(
    IN `id` VARCHAR(10)
)
DELETE FROM `game` WHERE `ID` = id;
CREATE PROCEDURE `caro`.`xoabanchoitheoplayerid`(
    IN `player_id` VARCHAR(10)
)
DELETE FROM `game` WHERE `PLAYER_ID` = player_id;
CREATE PROCEDURE `caro`.`xoabanchoitheousername`(
    IN `username` VARCHAR(20)
)
DELETE FROM `game` WHERE `PLAYER_ID` = (SELECT `ID` FROM `user` WHERE `USERNAME` = username);
CREATE PROCEDURE `caro`.`resetmatkhau`(
    IN `username` VARCHAR(20),
    IN `password` VARCHAR(30)
)
UPDATE `user` SET `PASSWORD` = password WHERE `USERNAME` = username;
DELIMITER $$
CREATE FUNCTION `caro`.`kiemtrataikhoan`(
    `username` VARCHAR(20),
    `password` VARCHAR(30)
)
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    DECLARE `result` BOOLEAN;
    SET `result` = FALSE;
    IF EXISTS(SELECT * FROM `user` WHERE `USERNAME` = username AND `PASSWORD` = password) THEN
        SET `result` = TRUE;
    END IF;
    RETURN `result`;
END $$
DELIMITER ;
DELIMITER $$
CREATE FUNCTION `caro`.`kiemtratontaiusername`(
    `username` VARCHAR(20)
)
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    DECLARE `result` BOOLEAN;
    SET `result` = FALSE;
    IF EXISTS(SELECT * FROM `user` WHERE `USERNAME` = username) THEN
        SET `result` = TRUE;
    END IF;
    RETURN `result`;
END $$
DELIMITER ;
DELIMITER $$
CREATE FUNCTION `caro`.`xemdiem`(
    `username` VARCHAR(20)
)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE `result` INT;
    SET `result` = 0;
    IF EXISTS(SELECT * FROM `user` WHERE `USERNAME` = username) THEN
        SET `result` = (SELECT `SCORE` FROM `user` WHERE `USERNAME` = username);
    END IF;
    RETURN `result`;
END $$
DELIMITER ;
CREATE USER `gamemaster`@`localhost` IDENTIFIED BY 'caro';
GRANT EXECUTE ON `caro`.* TO `gamemaster`@`localhost`;
GRANT SELECT ON `caro`.`nguoichoi` TO `gamemaster`@`localhost`;
GRANT SELECT ON `caro`.`admin` TO `gamemaster`@`localhost`;
GRANT SELECT ON `caro`.`banchoi` TO `gamemaster`@`localhost`;
FLUSH PRIVILEGES;