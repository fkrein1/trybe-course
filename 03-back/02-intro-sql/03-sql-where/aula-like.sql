SELECT * FROM sakila.film
WHERE title LIKE '%don';

SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

SELECT * FROM sakila.film
WHERE title LIKE '_C%';

SELECT * FROM sakila.film
WHERE title LIKE '________';

SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

SELECT * FROM sakila.film
WHERE description LIKE '%ace%';

SELECT * FROM sakila.film
WHERE title LIKE '%CHINA';

SELECT * FROM sakila.film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM sakila.film
WHERE title LIKE 'mosquito%' OR title LIKE '%academy';

SELECT * FROM sakila.film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';