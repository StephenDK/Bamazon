drop database if exists bamazon;

create database bamazon;
use bamazon;

create table products (
id integer(11) auto_increment not null,
product_name varchar(30) not null,
department_name varchar(30) not null,
price decimal(6, 2) not null,
stock_quantity integer(10) not null,
primary key (id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("Basketball", "Sports", 19.99, 2000);

insert into products (product_name, department_name, price, stock_quantity)
values ("Snowboard", "Sports", 499.99, 150);


insert into products (product_name, department_name, price, stock_quantity)
values ("Infinity QX4", "Vehicles", 5000.00, 2);


insert into products (product_name, department_name, price, stock_quantity)
values ("Toyota Prius", "Vehicles", 9000.99, 13);


insert into products (product_name, department_name, price, stock_quantity)
values ("The Catcher in the Rye", "Books", 19.99, 49);


insert into products (product_name, department_name, price, stock_quantity)
values ("A Series of Unfortunate Events", "Books", 29.99, 120);


insert into products (product_name, department_name, price, stock_quantity)
values ("Ralph Lauren", "Clothes", 49.99, 200);

insert into products (product_name, department_name, price, stock_quantity)
values ("Calvin Klein", "Clothes", 69.99, 99);

insert into products (product_name, department_name, price, stock_quantity)
values ("Dell", "Computers", 899.99, 168);

insert into products (product_name, department_name, price, stock_quantity)
values ("Razor", "Computers", 999.99, 15);

select * from products;