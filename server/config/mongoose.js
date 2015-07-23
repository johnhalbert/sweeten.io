// Require Mongoose
var mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/sweetenio');

// Require Models
require('../models/navigationModel');
require('../models/postModel');
require('../models/userModel');