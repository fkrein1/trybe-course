SELECT CONCAT(first_name, ' ', last_name) AS 'nome_completo' FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT CONCAT(title, ', ', release_year) AS 'lançamento_do_filme' FROM sakila.film;
SELECT CONCAT(title, ', ', rating) AS 'classificação' FROM sakila.film;
SELECT * FROM sakila.address;
SELECT CONCAT(address, ', ', district) AS 'endereço' from sakila.address;

