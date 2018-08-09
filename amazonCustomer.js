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

function showInventory() {
  // Display all items available for sale
  var showProducts = "SELECT * FROM products";
  connection.query(showAllProducts, function(err, results) {
    if (err) throw err;

    console.log("Current Inventory: ");
    console.log("...................\n");

    // Include the ids, names, and prices of products for sale
    var resultStr = "";
    for (var i = 0, i < results.length, i++) {
      resultStr = "";
      resultStr += "Product ID: " + results[i].item_id + " ,";
      resultStr += "Name: " + results[i].product_name + " ,";
      resultStr += "Department: " + results[i].department + " ,";
      resultStr += "Price: $" + results[i].price + " ,";

      console.log(resultStr);
    }

    console.log("----------------------------------\n");

    placeOrder();
  })
}

function placeOrder() {
  // Display two prompts:
  inquirer.prompt([
    {
      // First, ask the user for the ID of the product they'd like to buy
      type: "input",
      name: "item_id",
      message: "What is the ID of the item you would like to buy?",
      filter: Number
    },
    {
      // Secondly, ask how many units of the product they would like to buy
      type: "input",
      name: "quantity",
      message: "Please enter the quantity you'd like to purchase",
      filter: Number
    }
  ]).then(function(input) {
    var itemSelected = input.item_id;
    var quantityOfItem = input.stock_quantity;

    connection.query(showProducts, {item_id: item}, function(err, results) {
      if err throw err;

      if (results.length === 0) {
        console.log("Please enter a valid item id.");
        showInventory();
      } else {
        var resultData = results[0];

        if (quantityOfItem <= resultData.stock_quantity) {
          console.log("Hang tight while we finalize your order.");

          var updateProductInventory = "UPDATE products SET stock_quantity = " + (resultData.stock_quantity - quantity) + "WHERE item_id" + itemSelected;
          connection.query(updateProductInventory, function(err, results) {
            if err throw err;

            console.log("Your order is processing! Your total is $" + resultData.price * quantityOfItem);
            console.log("Thank you for your purchase!");
            console.log("\n---------------------------------------------\n");

            connection.end();
          })
        } else {
          console.log("Your order exceeds the quantity available.");
          console.log("Please select a different amount of the product you chose.");
          console.log("\n---------------------------------------------\n");

          showInventory();
        }
      }
    })
  })

}

// Connects to the server and starts the application
function start() {
  // Shows the user the inventory available
  showInventory();
}

// Starts the application
start();
