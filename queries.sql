-- 1. List all customers whose first name starts with a given letter (e.g., 'M'), ordered alphabetically

SELECT first_name, last_name
FROM customer
WHERE first_name LIKE 'M%'
ORDER BY first_name, last_name ASC;

