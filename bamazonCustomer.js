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
        retrieveDatabaseData();
            
});

// This function will prompt the user for item id and quantity wanted for purchase
function startSalePrompt () {
    inquirer.prompt([
        {
            type: "input",
            name: "productID",
            message: "Enter the product id of which you would like to buy."
        },
        {
            type: "input",
            name: "quantityWanted",
            message: "How many would you like to purchase?"
        }
    ]).then(function(purchaseAnswer) {
        console.log(purchaseAnswer.productID);
        console.log(purchaseAnswer.quantityWanted);
        console.log("-----------");
        var typeMe = purchaseAnswer.quantityWanted;

        console.log(typeof typeMe);
    })
};

// This function gets the data from the db and formats it with a loop
function retrieveDatabaseData () {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        // console.log(res);
        console.log("Items for Sale: ")
        console.log("-------------");

        var itemList = [];
        for (var i = 0; i < res.length; i++) {
            
            itemList.push(res[i]);
            
            console.log("Id:" + itemList[i].id + " " + res[i].product_name + " " + "$" + res[i].price);
        }
        startSalePrompt();
    })
};



// Section 3
// Main Process



