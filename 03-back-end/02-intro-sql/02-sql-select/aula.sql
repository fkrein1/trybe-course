SELECT * FROM sakila.film LIMIT 10;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECT * FROM sakila.actor LIMIT 10;
SELECT DISTINCT first_name FROM sakila.actor;
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language;
SELECT name FROM sakila.language WHERE name <> 'English';

SELECT * FROM sakila.film;
SELECT title, release_year,rental_duration, replacement_cost FROM sakila.film ORDER BY rental_duration DESC, replacement_cost LIMIT 20;