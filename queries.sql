-- Qn.1 : 

SELECT * 
FROM customer 
WHERE first_name LIKE 'M%' 
ORDER BY first_name ASC,last_name ASC;

-- Qn.2

SELECT plate,make,model,daily_rate 
FROM vehicle 
WHERE daily_rate>100 
ORDER BY daily_rate DESC 
LIMIT 10;

-- Qn.3

SELECT DISTINCT(make,model) AS fleet
FROM vehicle;

-- Qn.4

SELECT f.name,COUNT(v.vehicle_id) AS Total_Vehicles
FROM fuel_type AS f 
LEFT JOIN vehicle AS v 
ON f.fuel_type_id=v.fuel_type_id 
GROUP BY f.fuel_type_id 
ORDER BY Total_Vehicles DESC; 

-- Qn.5

SELECT first_name,last_name,branch_id 
FROM staff 
ORDER BY branch_id; 

-- Qn.6

SELECT r.customer_id,COUNT(r.rental_id) AS Total_Rentals,SUM(p.amount) AS Total_Paid
FROM rental AS r 
JOIN payment AS p 
ON r.rental_id=p.rental_id 
GROUP BY r.customer_id 
ORDER BY Total_Rentals DESC 
LIMIT 10;

-- Qn.7

 SELECT vc.name AS Vehicle_Category,COUNT(v.vehicle_id) AS Total_Vehicles 
 FROM vehicle_category AS vc 
 JOIN vehicle AS v  
 ON vc.category_id=v.category_id 
 GROUP BY vc.category_id 
 HAVING COUNT(v.vehicle_id) > 20 
 ORDER BY  
 Total_Vehicles DESC;  


-- Qn.8

SELECT c.customer_id,c.first_name,c.last_name 
FROM customer AS c 
LEFT JOIN payment AS p 
ON p.customer_id=c.customer_id 
GROUP BY c.customer_id 
HAVING COUNT(p.payment_id)=0;

--Qn.9

SELECT vc.category_id,SUM(p.payment_id) AS Total_Paid_SUV
FROM vehicle AS v 
JOIN vehicle_category AS vc ON vc.category_id=v.category_id
JOIN rental AS r ON r.vehicle_id=v.vehicle_id
JOIN payment AS p ON r.rental_id=p.rental_id
GROUP BY vc.category_id,vc.name
HAVING vc.name='SUV';

-- Qn 10

SELECT c.first_name,c.last_name,COUNT(r.rental_id) AS Total_Rentals,SUM(p.amount) AS Total_Paid
FROM customer AS c 
JOIN rental AS r 
ON c.customer_id=r.customer_id
JOIN payment AS p
ON p.rental_id=r.rental_id
GROUP BY c.customer_id,c.first_name,c.last_name
HAVING COUNT(r.rental_id)>100 AND SUM(p.amount)>25000
ORDER BY Total_Paid DESC;

-- Qn.11

BEGIN;

ALTER TABLE rental ADD COLUMN late_fee INT;

UPDATE return_date 
FROM rental
SET return_date='2026-11-21 15:35:00',late_fee=3000 
WHERE return_date<'2026-10-21 15:35:00';

COMMIT;