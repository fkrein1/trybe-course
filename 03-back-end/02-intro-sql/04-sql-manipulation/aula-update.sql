-- update somente com o ID
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;

UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = 10
WHERE length BETWEEN 0 AND 100;

UPDATE sakila.film
SET rental_rate = 20
WHERE length > 100;