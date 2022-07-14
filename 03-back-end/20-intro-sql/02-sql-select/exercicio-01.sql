SELECT "This is SQL Exercise, Practice and Solution";
SELECT 1 AS 'one', 2 AS 'two', 3 AS 'three';
SELECT 10 + 15;
SELECT 5 / 2;
SELECT * FROM Scientists.Scientists;
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Scientists.Projects;
SELECT name FROM Scientists.Scientists ORDER BY name DESC;
SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;
SELECT DISTINCT project FROM Scientists.AssignedTo;
SELECT name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;
SELECT name FROM Scientists.Projects ORDER BY hours LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY hours LIMIT 5;
SELECT CONCAT("Existem ", COUNT(name), " cientistas na tabela Scientists.") FROM Scientists.Scientists

