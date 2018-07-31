DROP DATABASE IF EXISTS amazon_DB;

CREATE DATABASE amazon_DB;
USE amazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(150) NOT NULL,
  department VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (2375, 'Samsung 50\" 4K UHD Smart TV', 'Electronics', 439.99, 10);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (6495, '15\" MacBook Pro', 'Electronics', 2200.99, 22);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (1780, 'Men\'s Dress Shoes', 'Apperal', 35.47, 25);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (3549, 'KitchenAid Mixer', 'Kitchen Appliances', 350.00, 10);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (9341, 'Wool Sweater', 'Apperal', 45.23, 50);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (8335, 'Hair Straightener', 'Beauty and Cosmetics', 75.47, 15);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (0183, 'Grill Cover', 'Outdoors', 65.33, 50);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (8243, 'XBox One X', 'Electronics', 399.99, 20);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (7256, 'Playstation 4 Pro', 'Electronics', 499.99, 25);

INSERT INTO products(item_id, product_name, department, price, stock_quantity)
VALUES (8339, 'Single Subject Notebook', 'School Supplies', 1.99, 100);
