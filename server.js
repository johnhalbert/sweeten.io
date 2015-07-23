// Require Dependencies

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Require DB Config

require('./server/config/mongoose.js');

// Set Up ExpressJS

var app = express()

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json())

// Require Routes

require('./server/config/routes')(app)

// Start Server

app.listen(5000, function(){
	console.log('Sweeten.IO -> NodeJS/Express -> :5000');
})