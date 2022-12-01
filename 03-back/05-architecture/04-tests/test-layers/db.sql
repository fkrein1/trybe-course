
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE IF NOT EXISTS movies (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  direcao VARCHAR(50) NOT NULL,
  ano_lancamento YEAR NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO movies (nome,direcao,ano_lancamento)

VALUES ('Godfather', 'Francis Ford Coppola', '1972'),
('Pulp Fiction', 'Quentin Tarantino', '1994');
