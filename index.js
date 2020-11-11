// Importing libraries
const express = require('express');
const bodyParser = require('body-parser');



// intializing app
var app = express();
var PORT = process.env.PORT || 3000;

// setting app
app.use(bodyParser.json());


// importing Routes
var gitRoute = require('./Routes/GitRoute');

// Adding Routes to app

app.use(gitRoute);


// Starting Server

var server = app.listen(PORT , () => {
    console.log("Server is Running at " + PORT);
})