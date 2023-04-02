DROP DATABASE IF EXISTS juicios;
CREATE DATABASE juicios;
USE juicios;
SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `neighborhood_id` int NOT NULL,
  `street` varchar(50) NOT NULL,
  `exterior_number` varchar(10) NOT NULL,
  `interior_number` varchar(10) NOT NULL,
  `postal_code` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `neighborhood_id` (`neighborhood_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`neighborhood_id`) REFERENCES `neighborhoods` (`id`)
);
CREATE TABLE `case_descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `case_id` int NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `case_id` (`case_id`),
  CONSTRAINT `case_descriptions_ibfk_1` FOREIGN KEY (`case_id`) REFERENCES `cases` (`id`)
);
CREATE TABLE `case_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status_name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `cases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `case_number` varchar(20) NOT NULL,
  `start_date` date NOT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `case_number` (`case_number`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `cases_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `case_status` (`id`)
);
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `state_id` (`state_id`),
  CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`)
);
CREATE TABLE `decisions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `case_id` int NOT NULL,
  `stage_id` int NOT NULL,
  `user_id` int NOT NULL,
  `decision_date` date NOT NULL,
  `decision_text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `case_id` (`case_id`),
  KEY `stage_id` (`stage_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `decisions_ibfk_1` FOREIGN KEY (`case_id`) REFERENCES `cases` (`id`),
  CONSTRAINT `decisions_ibfk_2` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`id`),
  CONSTRAINT `fk_decisions_involved_cases` FOREIGN KEY (`user_id`) REFERENCES `involved_cases` (`id`)
);
CREATE TABLE `evidence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stage_id` int NOT NULL,
  `submit_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stage_id` (`stage_id`),
  CONSTRAINT `evidence_ibfk_1` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`id`)
);
CREATE TABLE `evidence_descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `evidence_id` int NOT NULL,
  `description` text NOT NULL,
  `file` longblob,
  PRIMARY KEY (`id`),
  KEY `evidence_id` (`evidence_id`),
  CONSTRAINT `evidence_descriptions_ibfk_1` FOREIGN KEY (`evidence_id`) REFERENCES `evidence` (`id`)
);
CREATE TABLE `involved_cases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `person_id` int NOT NULL,
  `level_id` int NOT NULL,
  `case_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_involved_cases_parties` (`person_id`),
  KEY `fk_involved_cases_cases` (`case_id`),
  KEY `fk_involved_cases_user_levels` (`level_id`),
  CONSTRAINT `fk_involved_cases_cases` FOREIGN KEY (`case_id`) REFERENCES `cases` (`id`),
  CONSTRAINT `fk_involved_cases_parties` FOREIGN KEY (`person_id`) REFERENCES `parties` (`id`),
  CONSTRAINT `fk_involved_cases_user_levels` FOREIGN KEY (`level_id`) REFERENCES `user_type` (`id`)
);
CREATE TABLE `neighborhoods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `neighborhoods_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
);
CREATE TABLE `observations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `case_id` int NOT NULL,
  `stage_id` int NOT NULL,
  `user_id` int NOT NULL,
  `observation_date` date NOT NULL,
  `observation_text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `case_id` (`case_id`),
  KEY `stage_id` (`stage_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `fk_observations_involved_cases` FOREIGN KEY (`user_id`) REFERENCES `involved_cases` (`id`),
  CONSTRAINT `observations_ibfk_1` FOREIGN KEY (`case_id`) REFERENCES `cases` (`id`),
  CONSTRAINT `observations_ibfk_2` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`id`)
);
CREATE TABLE `parties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `contact_details` varchar(50) NOT NULL,
  `state_id` int NOT NULL,
  `city_id` int NOT NULL,
  `neighborhood_id` int NOT NULL,
  `address_id` int NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `state_id` (`state_id`),
  KEY `city_id` (`city_id`),
  KEY `neighborhood_id` (`neighborhood_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `parties_ibfk_2` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`),
  CONSTRAINT `parties_ibfk_3` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  CONSTRAINT `parties_ibfk_4` FOREIGN KEY (`neighborhood_id`) REFERENCES `neighborhoods` (`id`),
  CONSTRAINT `parties_ibfk_5` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`)
);
CREATE TABLE `stage_descriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stage_id` int NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stage_id` (`stage_id`),
  CONSTRAINT `stage_descriptions_ibfk_1` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`id`)
);
CREATE TABLE `stages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `case_id` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `case_id` (`case_id`),
  CONSTRAINT `stages_ibfk_1` FOREIGN KEY (`case_id`) REFERENCES `cases` (`id`)
);
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `user_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
);
SET FOREIGN_KEY_CHECKS=1;