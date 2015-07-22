// Set up dependencies

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Set up Mongoose

require('./server/config/mongoose')

// Set up Express

var app = express()

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

// Set up Routes

require('./server/config/routes')(app)

// Start Server

app.listen(5000, function(){
	console.log('Sweeten.IO -> NodeJS/Express -> :5000');
})
