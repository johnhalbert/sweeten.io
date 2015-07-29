// Configure Mongoose & User Model
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Require bcrypt
var bcrypt = require('bcrypt');

// Require passport
var passport = require('passport');

// Export Controller Functions to Routes
module.exports = {
	createUser: function(req, res){
		console.log(req.body);
		var newUser = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email})
		bcrypt.genSalt(8, function(err, salt){
			bcrypt.hash(req.body.password, salt, function(err, hash){
				newUser.password = hash;
				newUser.save(function(err, user){
					if (err) {
						console.log('Error creating new user (1)', err);
					} else {
						req.login(user, function(err){
							if (err) {
								console.log('Error creating user (2)', err);
							}
							res.redirect('/#/dashboard');
						})
					}
				})
			})
		})
	}
}