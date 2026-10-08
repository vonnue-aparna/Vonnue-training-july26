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

-- 3. List all distinct vehicle makes in the fleet

SELECT DISTINCT make
FROM vehicle;

-- 4. For every fuel type in the fuel_type table, show the number of vehicles of that fuel type — including fuel types with zero vehicles. Order by vehicle count descending.

SELECT ft.name, COUNT(v.fuel_type_id) as count_of_vehicle
FROM fuel_type ft
LEFT JOIN vehicle v ON ft.fuel_type_id = v.fuel_type_id
GROUP BY ft.name
ORDER BY count_of_vehicle DESC;

-- 5. List every staff member's first name, last name, and branch ID, ordered by branch ID.

SELECT first_name, last_name, branch_id
FROM staff
ORDER BY branch_id;

-- 6. For each customer, return the total number of rentals and the total amount paid, ordered by total paid descending, top 10 only.

SELECT c.customer_id, c.first_name, c.last_name, COALESCE(SUM(p.amount), 0) as total_amount
FROM customer c
LEFT JOIN rental r ON c.customer_id = r.customer_id
LEFT JOIN payment p ON p.rental_id = r.rental_id
GROUP BY c.customer_id
ORDER BY total_amount DESC
limit 10;

-- 7. List vehicle categories with more than 20 vehicles, showing category name and vehicle count, sorted by count descending.

SELECT vc.name, COUNT (v.vehicle_id) as vehicle_count
FROM vehicle_category vc
LEFT JOIN vehicle v ON vc.category_id = v.category_id
GROUP BY vc.category_id
ORDER BY vehicle_count DESC;

-- 8. Find all customers who have never made a payment. Return customer ID, first name, and last name

SELECT c.first_name, c.last_name
FROM customer c
LEFT JOIN payment p ON c.customer_id = p.customer_id
WHERE p.customer_id IS NULL;