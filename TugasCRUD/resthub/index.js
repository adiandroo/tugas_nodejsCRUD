// filename: index.js

// import express
let express = require('express');

// import body parser
let bodyParser = require('body-parser');

// import mongoose
let mongoose = require('mongoose');

// initiate app
let app = express();

// import routes
let apiRoutes = require("./api-routes");

// config bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

// setup server port 8080
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send("Welcome"));

// app apiRoutes
app.use('/api', apiRoutes);

// Launch app to listen specified PORT
app.listen(port, function () {
    console.log("Running Resthub on port " + port);
})