SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 25;

SELECT * FROM sakila.rental
WHERE return_date IS NULL;

SELECT * FROM sakila.staff
WHERE active IS TRUE;

SELECT * FROM sakila.address
WHERE address2 IS NOT NULL;

SELECT * FROM sakila.film
WHERE title NOT LIKE 'academy%';