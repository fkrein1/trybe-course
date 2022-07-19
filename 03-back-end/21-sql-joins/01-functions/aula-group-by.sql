SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT active, COUNT(active) as total_clients from sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(active) from sakila.customer
GROUP BY store_id, active;

SELECT rating, AVG(rental_duration) from sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;

SELECT district, COUNT(district) FROM sakila.address
GROUP BY district
ORDER BY COUNT(district) DESC;