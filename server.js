// Require Dependencies

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');


// Require DB Config

require('./server/config/mongoose.js');

// Set Up ExpressJS

var app = express()

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json())
app.use(cookieParser({ secret: 'soveryverysweetenio' }))
app.use(session({ secret: 'ohsosweetenio' }))
app.use(passport.initialize());
app.use(passport.session());

// Require Routes

require('./server/config/routes')(app)

// Start Server

app.listen(5000, function(){
	console.log('Sweeten.IO -> NodeJS/Express -> :5000');
})