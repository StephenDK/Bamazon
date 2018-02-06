// Section 1 
// Global Variables

// load the inquirer npm modules
var inquirer = require('inquirer');

// Load the mysql npm mdules
var mysql = require('mysql');

// Section 2
// Functions and listeners




    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "StephenDKlein360",
        database: "bamazon"
    });

    connection.connect(function(err) {
        if (err) throw err;
            console.log("Connected with id: " + connection.threadId);
            // connection.end();
        retrieveDatabaseData();
    });

function retrieveDatabaseData () {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        // console.log(res);
        console.log("Items for Sale: ")
        console.log("-------------");

        var itemList = [];
        for (var i = 0; i < res.length; i++) {
            itemList.push(res[i].product_name);
            
            console.log(itemList[i]);
        }
        

        connection.end();
    })
};



// Section 3
// Main Process


