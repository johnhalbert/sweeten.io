// Configure Mongoose & User Model
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Require bcrypt
var bcrypt = require('bcrypt');

// Configure Passport for Local Strategy
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Define new LocalStrategy
passport.use(new LocalStrategy({
		usernameField: 'email'
	},
	// Passport Verify Callback
	function(email, password, done) {
		// Mongoose findOne using email
		User.findOne({ email: email }, function(err, user){
			// If error occurs during DB call, invoke done() with error in return
			if (err) { return done(err); }
			// If Mongoose doesn't find an entry, invoke done(), pass custom error message
			if (!user) {
				return done(null, false, { message: 'Incorrect email.' });
			}
			// If Mongoose finds user but password is incorrect, invoke done(), pass custom error message
			if (user) {
				// Compare entered password from hashed password in DB.
				bcrypt.compare(password, user.password, function(err, same){
					// If passwords don't match, invoke done(), pass custom error message
					if (!same) {
						return done(null, false, { message: 'Incorrect password.' });
					// If passwords match, invoke done(), pass user data
					} else {
						return done(null, user);
					}
				})
			}
		});
	}
));