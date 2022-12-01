CREATE DATABASE IF NOT EXISTS exercicio_23_01;

USE exercicio_23_01;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL,
	user_password VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO users (first_name,last_name,email,user_password)
VALUES ('Felipe','Rocha','felipekrein@gmail.com','123456');