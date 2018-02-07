// Section 1 
// Global Variables

// load the inquirer npm modules
var inquirer = require('inquirer');

// Load the mysql npm mdules
var mysql = require('mysql');

// Section 2
// Functions and listeners
// create connection to the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "StephenDKlein360",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
        console.log("Connected with id: " + connection.threadId + "\n");
        console.log("Welcome to Bamazon!!");
        start();
            
});

function start() {
    inquirer
        .prompt({
            name: "customerOrManager",
            type: "rawlist",
            message: "Are you a [Customer] or [Manager] of Bamazon?",
            choices: ["Customer", "Manager"]
        })
        .then(function(answer) {
            if (answer.customerOrManager.toUpperCase() === "CUSTOMER") {
                 customerPurchase();
            } else {
                // manager();
            }
        });
}

function customerPurchase() {
    // querry db for all of the items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        // pompt the user for which item they'd like to bid
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What item would you like to purchase?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])
            .then(function(answer) {
                // get the information of the choosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.choice) {
                        chosenItem = results[i];
                    }
                }
                // tests and debuuging
                // console.log(chosenItem);
                // if 
                if (chosenItem.stock_quantity > 0) {
                    var newQuantity = parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity);
                    console.log(newQuantity);
                }
            })
    }) 
}