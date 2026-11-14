-- CREATE a database
-- create database flipkart;
-- to select the database you need to work on
use flipkart;

-- create a table;
SHOW TABLES;

-- CREATE TABLE employee (
--     Rollno int, 
--     FirstName varchar(40),
--     Age int,
--     Address varchar(100)
-- );

-- to insert values inside the table
insert into employee(Rollno, FirstName, Age, Address)
values(1, "Nana Patekar", 60, "Mumbai"),
(2, "me", 22, "Ghaziabad");

-- to select the table/ to fetch the data
select * from employee;

select Rollno, FirstName from employee;
select Address from employee;

select * from employee where Rollno <  7;
select * from employee where FirstName = "me";

-- AND operator
select * from employee where FirstName = "me" AND Address = "Ghaziabad";

-- OR operator
select * from employee where FirstName = "Aman" OR Address = "Mumbai";

-- IN operator
select * from employee where Address = "Ghaziabad" OR Address = "Delhi" OR Address = "Lucknow";
select * from employee where Address IN ("Ghaziabad", "Delhi", "Mumbai");

select * from employee where Rollno between 1 and 1;

-- delete: to delete a specific record
-- delete from employee where rollno in (8,9,10);

-- truncate: to remove all record at once but not the table
-- TRUNCATE table employee;

-- drop: to delete a table/database
-- drop table employee;
-- drop database flipkart;


