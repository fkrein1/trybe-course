SELECT * from hr.employees;

SELECT
	CONCAT(emp.first_name, " ", emp.last_name) AS "Colaborador",
  CONCAT(man.first_name, " ", man.last_name) AS "Gerente"
FROM hr.employees AS emp
JOIN hr.employees as man
ON  emp.manager_id = man.employee_id
ORDER BY man.first_name;


SELECT
  DISTINCT(CONCAT(man.first_name, " ", man.last_name)) AS "Gerente",
  COUNT(*)
FROM hr.employees AS man
JOIN hr.employees as emp
ON  emp.manager_id = man.employee_id
GROUP BY man.employee_id;
