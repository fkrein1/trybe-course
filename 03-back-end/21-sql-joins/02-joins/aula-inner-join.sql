SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

SELECT 
FROM sakila.actor a
INNER JOIN sakila.film f

SELECT * from sakila.actor;
SELECT * from sakila.film_actor;

SELECT CONCAT(a.first_name, ' ', a.last_name) as Actor, a.actor_id, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT * from sakila.staff;
SELECT * from sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s
INNER JOIN sakila.address a
ON a.address_id = s.address_id;

SELECT * from sakila.customer;
SELECT * from sakila.address;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer c
INNER JOIN sakila.address a
ON a.address_id = c.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer c
INNER JOIN sakila.address a
ON a.address_id = c.address_id
WHERE a.district = 'California' AND (c.first_name LIKE '%rene%' OR c.last_name LIKE '%rene%');

SELECT c.first_name, COUNT(a.address_id)
FROM sakila.customer c
INNER JOIN sakila.address a
ON a.address_id = c.address_id
WHERE active = 1
GROUP BY c.first_name
ORDER BY COUNT(a.address_id) DESC;

SELECT * from sakila.payment;
SELECT * from sakila.staff;

SELECT s.staff_id, s.first_name, s.last_name, SUM(p.amount)
FROM sakila.staff as s
INNER JOIN sakila.payment as p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;


SELECT * from sakila.actor;
SELECT * from sakila.film_actor;
SELECT * from sakila.film;

SELECT a.actor_id, a.first_name, a.last_name, f.title
FROM sakila.actor as a
JOIN sakila.film_actor as fa
ON a.actor_id = fa.actor_id
JOIN sakila.film as f
ON f.film_id = fa.film_id;
