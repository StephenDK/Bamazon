// Section 1 
// Global Variables

// load the inquirer npm modules
var inquirer = require('inquirer');

// Load the mysql npm mdules
var mysql = require('mysql');

// Section 2
// Functions and listeners

// This functions connects to the database
function connectToDatabase () {

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
            connection.end();
        
    });
}
connectToDatabase();


// Section 3
// Main Process
