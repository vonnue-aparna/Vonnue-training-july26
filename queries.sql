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

-- Q8
-- Find all customers who have never made a payment. Return customer ID, first name, and last name.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name
FROM
    customer AS c
    LEFT JOIN payment AS p ON c.customer_id = p.customer_id
WHERE
    p.payment_id IS NULL;

-- Q9
-- For each branch, calculate total revenue generated specifically from rentals of 'SUV' category vehicles —attribute revenue to the branch that owns the rented vehicle (i.e., via vehicle.branch_id), 
-- not the branch of the staff member who processed the payment. Show branch id and total revenue, sorted by revenue, highest to lowest.
SELECT
    v.branch_id,
    SUM(p.amount) AS total_revenue
FROM
    vehicle AS v
    JOIN vehicle_category AS vc ON v.category_id = vc.category_id
    JOIN rental AS r ON v.vehicle_id = r.vehicle_id
    JOIN payment AS p ON r.rental_id = p.rental_id
WHERE
    vc.name = 'SUV'
GROUP BY
    v.branch_id
ORDER BY
    total_revenue DESC;

-- Q10
-- List customers who have rented more than 100 times AND spent more than $25,000 in total, showing customer name, total rentals, and total amount spent, ordered by total spent descending.
SELECT
    c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS total_rentals,
    SUM(p.amount) as total_spent
FROM
    customer AS c
    JOIN rental AS r ON c.customer_id = r.customer_id
    JOIN payment AS p ON r.rental_id = p.rental_id
GROUP BY
    c.customer_id,
    c.first_name,
    c.last_name
HAVING
    COUNT(r.rental_id) > 100
    AND SUM(p.amount) > 25000
ORDER BY
    total_spent DESC;

-- Q11
-- Transactions. Pick a rental that has not been returned yet (return_date IS NULL). Write a single transaction that sets its return_date and inserts a corresponding late-fee row into payment a  one atomic operation. 
-- Then demonstrate rollback: force the late-fee insert to fail (for example with a constraint
-- 
-- THIS IS A SUCCESS TRANSACTION
BEGIN;

SELECT
    *
FROM
    rental
WHERE
    return_date IS NULL
LIMIT
    1;

UPDATE
SET
    r.return_date = '2026-08-20 12:00:00'
FROM
    rental as r
WHERE
    -- founded this id by this query: SELECT * FROM rental WHERE return_date IS NULL LIMIT 1;
    r.rental_id = 200;

INSERT INTO
    payment (
        rental_id,
        customer_id,
        staff_id,
        amount,
        payment_date
    )
VALUES
    -- got this value from the query: SELECT * FROM rental WHERE rental_id = 200;
    (200, 270, 2, 200, '2026-08-20 12:00:00');

COMMIT;

--
-- THIS IS NOT SUCCESS THERE FOR ROLLBACK
BEGIN;

UPDATE
SET
    r.return_date = '2026-08-20 12:00:00'
FROM
    rental as r
WHERE
    -- this will cause error because there is no rental with id 99999999
    r.rental_id = 99999999;

INSERT INTO
    payment (
        rental_id,
        customer_id,
        staff_id,
        amount,
        payment_date
    )
VALUES
    -- got this value from the query: SELECT * FROM rental WHERE rental_id = 200;
    (200, 270, 2, 200, '2026-08-20 12:00:00');

ROLLBACK;