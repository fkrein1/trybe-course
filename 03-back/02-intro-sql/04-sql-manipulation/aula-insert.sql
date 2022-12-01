INSERT IGNORE INTO pessoas (id, name) 
VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Inserindo dados de outra tabela
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;

    SELECT * from sakila.staff;

INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
VALUES ('felipe', 'krein', 5, 2, 1, 'Felipe');

INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
VALUES 
('renata', 'suigh', 5, 2, 1, 'renata'),
('ineide', 'teresinha', 5, 2, 1, 'ineide'),
('julia', 'rocha', 5, 2, 1, 'julia');

INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    LIMIT 5;
    

INSERT INTO sakila.category(name)
VALUES
('Ztunes'),
('Zbunes'),
('Zlindos');

INSERT INTO sakila.store(manager_staff_id, address_id)
VALUES
(3, 3),
(4, 4),
(5, 5);

