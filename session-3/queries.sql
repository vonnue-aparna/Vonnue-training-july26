
1)
SELECT * FROM customer WHERE first_name LIKE '%M' ORDER BY ASC ;

2)
SELECT plate, make, model , daily_rate FROM vehicle WHERE daily_rate >100 LIMIT 10;

3)
SELECT DISTINCT * FROM vehicle;

4)
SELECT vehicle.model , fuel_type.name FROM vehicle
LEFT JOIN fuel_type ON fuel_type.fuel_type_id = vehicle.fuel_type_id
ORDER BY COUNT(vehicle_id);

5)
SELECT first_name, last_name, branch_id FROM staff 
JOIN branch ON branch_id = staff.branch_id ORDER BY branch_id;

6)
SELECT customer_id, rental_id, COUNT(amount) FROM customer
JOIN payment ON payment.customer_id = customer.customer_id
ORDER BY COUNT(amount) DESC LIMIT 10;          

7)
SELECT vehicle_category.name , COUNT(vehicle.category_id) FROM vehicle_category 
JOIN vehicle ON vehicle_category.category_id = vehicle.category_id
ORDER BY(COUNT(vehicle.category_id)) DESC LIMIT 20;

8)
SELECT payment.customer_id , first_name , last_name FROM payment 
JOIN customer ON payment.customer_id =customer.customer_id
WHERE amount IS NULL; 

9)
SELECT vehicle.branch_id, SUM(payment.amount) AS total_revenue FROM payment
JOIN rental ON payment.rental_id = rental.rental_id
JOIN vehicle ON rental.vehicle_id = vehicle.vehicle_id
WHERE vehicle.category = 'SUV'
GROUP BY vehicle.branch_id
ORDER BY total_revenue DESC;

10)
SELECT customer.customer_id, COUNT(rental.customer_id), payment.amount FROM customer
JOIN rental ON rental.customer_id = customer.customer_id
JOIN payment ON payment.customer_id = customer.customer_id
ORDER BY payment.amount DESC;



