-- create DATABASE Employees;

use Employees;

-- CREATE TABLE empData (
--     EmployeeID int,
--     FirstName varchar(20),
--     LastName varchar(20),
--     Position varchar(20),
--     Salary int,
--     HireDate DATE,
--     Department varchar(20)
-- );

-- insert into empData(
--     EmployeeID,
--     FirstName,
--     LastName,
--     Position,
--     Salary,
--     HireDate,
--     Department
-- )
-- values  (1,     "John",     "Doe",      "Manager",           75000,     "2023-05-12",     "Sales"),
--         (2,     "Jane",     "Smith",    "HR Coordinator",    58000,     "2024-02-01",     "HR"),
--         (3,     "Micheal",  "Lee",      "Developer",         65000,     "2023-10-10",     "IT"),
--         (4,     "Sarah",    "Brown",    "Sales Executive",   48000,     "2022-09-15",     "Sales"),
--         (5,     "David",    "Clark",    "IT Support",        52000,     "2021-03-21",     "IT"),
--         (6,     "Linda",    "Green",    "Marketing Manager", 82000,     "2020-08-01",     "Marketing"),
--         (7,     "James",    "White",    "HR Manager",        85000,     "2019-11-12",     "HR"),
--         (8,     "Emily",    "Black",    "Developer",         60000,     "2021-05-30",     "IT"),
--         (9,     "Robert",   "Miller",   "Accountant",        70000,     "2022-05-25",     "Finance"),
--         (10,    "Susan",    "Davis",    "Sales Executive",   50000,     "2022-12-05",     "Sales");



-- insert into empData(
--     EmployeeID,
--     FirstName,
--     LastName,
--     Position,
--     Salary,
--     HireDate,
--     Department
-- )
-- values (11, "Mark", "Evans" , "Product Manager", 90000, "2024-06-01", "Product"),
--        (12, "Anna", "Wilson", "IT Analyst", 58000, "2023-03-15", "IT Department");

select * from empData where Department = "Sales";

select FirstName, LastName, Salary from empData; 



select * from empData;


-- constraints: enforces the rules and regulations to maintain the accuracy and intigrity
-- not null: enforces the column to not accept null values
-- unique: enforces to accept the unique values only
/* primary key: not null + unique
              : there can be only one primary key in a table
              : main uasge -› for unique identification of a record
*/
-- check: to apply a condition
-- default : used to set a default value



-- create table employee (
-- EmpId int primary key,
-- EmpName varchar (40) not nul1,
-- Email varchar (50) unique,
-- Age int check (age›=18),
-- Country varchar (40) default 'India',
-- salary int
-- );

-- Insert into employee (EmpId, EmpName, Email, Age, salary)
-- values (3, "Reeha", "reeha@gmail.com", 19, 40000);

-- select * from employee;



-- CREATE TABLE customer (
--     CustId INT,
--     CustName VARCHAR(20),
--     Amount INT,
--     Product VARCHAR(30),
--     PurchaseDate DATE
-- );

-- INSERT INTO customer (CustId, CustName, Amount, Product, PurchaseDate)
-- VALUES
-- (1, 'Rahul', 500, 'Keyboard', '2026-10-01'),
-- (2, 'Priya', 800, 'Mouse', '2026-10-01'),
-- (1, 'Rahul', 1200, 'Monitor', '2026-10-03'),
-- (3, 'Amit', 600, 'Keyboard', '2026-10-02'),
-- (2, 'Priya', 400, 'Headphones', '2026-10-04'),
-- (4, 'Sneha', 1500, 'Laptop', '2026-10-02'),
-- (1, 'Rahul', 700, 'Mouse', '2026-10-05'),
-- (3, 'Amit', 900, 'Monitor', '2026-10-05'),
-- (5, 'Rohit', 2000, 'Laptop', '2026-10-03'),
-- (2, 'Priya', 1100, 'Keyboard', '2026-10-06'),
-- (4, 'Sneha', 500, 'Mouse', '2026-10-06'),
-- (5, 'Rohit', 800, 'Headphones', '2026-10-07'),
-- (3, 'Amit', 300, 'Laptop', '2026-10-08'),
-- (1, 'Rahul', 900, 'Headphones', '2026-10-09'),
-- (5, 'Rohit', 600, 'Monitor', '2026-10-09');


select * from customer;
select sum(Amount) from customer;
select CustId, CustName, sum(Amount) from customer group by CustId, CustName;
select CustId, CustName, sum(Amount) from customer group by CustId, CustName having sum(Amount) < 3000;
