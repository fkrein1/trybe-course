
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (cep)
);

INSERT INTO ceps (cep,logradouro,bairro,localidade,uf)

VALUES ('01231011','R. Gabriel dos Santos','Santa Cecília','São Paulo','SP'),
	('05014000','R. Monte Alegre','Perdizes','São Paulo','SP');
