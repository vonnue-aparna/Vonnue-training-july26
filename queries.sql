-- 1. List all customers whose first name starts with a given letter (e.g., 'M'), ordered alphabetically

SELECT first_name, last_name
FROM customer
WHERE first_name LIKE 'M%'
ORDER BY first_name, last_name ASC;

-- 2. List all vehicles with a daily rate above $100, showing plate, make, model and daily rate, highest rate first, top 10 only.

SELECT plate, make, model, daily_rate
FROM vehicle
WHERE daily_rate > 100
ORDER BY daily_rate DESC
LIMIT 10;