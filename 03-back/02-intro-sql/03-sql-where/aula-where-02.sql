SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT first_name, last_name FROM sakila.customer 
WHERE store_id = 2 AND active = 0 AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(customer_id) FROM sakila.customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active = 0 AND store_id = 1;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;