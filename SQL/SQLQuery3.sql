-- Retrieve all data
/* select * from customers */
-- Retrieve each country's name and score
/* 
select 
	country,
	score
from customers
*/
-- Retrive customer data whose score is not equal to 0
/* select * from customers where score != 0; */
-- Retrive customer who belong to Germany
/*
select 
	first_name,
	country
from customers
where country = 'Germany'
*/
--Retrive all customers and sort the results by highest score first
/* select * from customers order by score desc 
select * from customers order by score asc */
-- Retrieve all customers and sort the results by the country and then by the highest score
-- this type of sorting make sense when there is repeatation and sort more proefficiently
/*
select * 
from customers 
order by 
	country asc, 
	score desc
*/
-- Find the total score for each country
/*
select 
	country,
	sum(score) as total_score
from customers
group by country

select 
	country,
	first_name,
	sum(score) as total_score
from customers
group by country, first_name
*/

-- Find the total score and total number of customers for each country
/*
select
	country,
	sum(score) as total_score,
	count(id) as total_customers
from customers 
group by country
order by total_score desc
*/
-- where and having
/*
select 
	country,
	sum(score) as total_score
from customers 
where score>400
group by country
having sum(score)>800
*/

-- Find the average score for each country considering only customers with a score not equal to 0 and return only those countries with an average score greater than 430

select
	country,
	avg(score) as avg_score
from customers
where score != 0
group by country
having avg(score)>430