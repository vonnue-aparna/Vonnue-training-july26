-- Q1
-- List all customers whose first name starts with a given letter (e.g., 'M'), ordered alphabetically.
SELECT
    *
from
    customer AS c
WHERE
    first_name LIKE 'M%'
ORDER BY
    c.first_name;

-- Q2
--List all vehicles with a daily rate above $100, showing plate, make, model and daily rate, highest rate first, top 10 only.
SELECT
    v.plate,
    v.make,
    v.model,
    v.daily_rate
FROM
    vehicle AS v
WHERE
    v.daily_rate > 100
ORDER BY
    v.daily_rate DESC
LIMIT
    10;

-- Q3
-- List all distinct vehicle makes in the fleet.
SELECT DISTINCT
    v.make
FROM
    vehicle AS v;

-- Q4
-- For every fuel type in the fuel_type table, show the number of vehicles of that fuel type — including fuel types with zero vehicles. Order by vehicle count descending.
SELECT
    f.name,
    COUNT(v.vehicle_id)
FROM
    fuel_type as f
    LEFT JOIN vehicle AS v ON f.fuel_type_id = v.fuel_type_id
GROUP BY
    f.fuel_type_id,
    f.name;

-- Q5
-- List every staff member's first name, last name, and branch ID, ordered by branch ID
SELECT
    st.first_name,
    st.last_name,
    st.branch_id
FROM
    staff AS st
ORDER BY
    st.branch_id;

-- Q6
-- For each customer, return the total number of rentals and the total amount paid, ordered by total paid descending, top 10 only.
SELECT
    c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS total_rentals,
    SUM(p.amount) AS total_paid
FROM
    customer AS c
    JOIN rental AS r ON c.customer_id = r.customer_id
    JOIN payment AS p ON r.rental_id = p.rental_id
GROUP BY
    c.customer_id,
    c.first_name,
    c.last_name
ORDER BY
    total_paid DESC
LIMIT
    10;

-- Q7
-- List vehicle categories with more than 20 vehicles, showing category name and vehicle count, sorted by count descending.
SELECT
    vc.name,
    COUNT(v.vehicle_id) as vehicle_count
FROM
    vehicle_category AS vc
    LEFT JOIN vehicle AS v ON vc.category_id = v.category_id
GROUP BY
    vc.category_id,
    vc.name
ORDER BY
    vehicle_count DESC;