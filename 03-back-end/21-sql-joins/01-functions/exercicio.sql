-- employees do banco de dados hr

SELECT * FROM hr.employees;

SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) as average_salary
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT ROUND(MAX(salary),2), ROUND(MIN(salary),2), ROUND(AVG(salary),2), ROUND(SUM(salary),2) FROM hr.employees;

SELECT job_id, COUNT(job_id) from hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

SELECT job_id, SUM(salary) from hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) from hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

SELECT job_id, AVG(salary) from hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY AVG(salary) DESC;

SELECT department_id, AVG(salary), COUNT(employee_id) FROM hr.employees
GROUP BY department_id
HAVING COUNT(employee_id) > 10;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT first_name FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date)
FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date)
FROM hr.employees;

SELECT employee_id, first_name, MONTH(hire_date)
FROM hr.employees;

SELECT CONCAT(UCASE(first_name), ' ', UCASE(last_name)) AS full_name
FROM hr.employees;

SELECT last_name, hire_date
FROM hr.employees
WHERE YEAR(hire_date) = 1987 AND MONTH(hire_date) = 7;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS 'days_worked'
FROM hr.employees;