// Requires mysql to interact with the amazon_DB server
var mysql = require("mysql");
// Requires inquirer to interact with the CLI
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "amazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  // Display all items available for sale
  // Include the ids, names, and prices of products for sale
  connection.query("SELECT * FROM products", function(err, results) {

  });
}

function placeOrder() {
  // Display two prompts:
  // First, ask the user for the ID of the product they'd like to buy
  // Secondly, ask how many units of the product they would like to buy
}

function quantityCheck() {
  // Once customer has placed the order, check if the store has a larg
  // enough quantity of the product to handle the customer's request:

  // If yes, update the database to reflect the remaining quantity
  // and show the customer the total cost of their purchase

  // If no, log a phrase such as "Insufficient Quantity"
}
