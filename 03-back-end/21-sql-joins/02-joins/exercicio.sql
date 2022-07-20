-- PIXAR DB

  SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

SELECT mov.title, box.domestic_sales, box.international_sales
FROM movies as mov
JOIN box_office as box
ON mov.id = box.movie_id;

SELECT mov.title, box.domestic_sales + box.international_sales as sales
FROM movies as mov
JOIN box_office as box
ON mov.id = box.movie_id
WHERE box.international_sales > box.domestic_sales;

SELECT mov.title, box.rating
FROM movies as mov
JOIN box_office as box
ON mov.id = box.movie_id
ORDER BY rating DESC;

SELECT theater.name, mov.title
FROM theater as theater
LEFT JOIN movies as mov
ON theater.id = mov.theater_id
ORDER BY theater.name;

SELECT mov.title, theater.name
FROM theater as theater
RIGHT JOIN movies as mov
ON theater.id = mov.theater_id
ORDER BY theater.name;

SELECT *
FROM movies as mov
JOIN box_office as box
ON mov.id = box.movie_id
WHERE box.rating > 8 AND mov.theater_id IS NOT NULL;

SELECT *
FROM movies as mov
JOIN box_office as box
ON mov.id = box.movie_id
WHERE box.rating > 8 AND mov.theater_id IS NOT NULL;

