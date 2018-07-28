DROP DATABASE IF EXISTS amazon_DB;

CREATE DATABASE amazon_DB;
USE amazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(150) NOT NULL,
  department VARCHAR(50) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY(item_id)
);
