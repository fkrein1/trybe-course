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

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;