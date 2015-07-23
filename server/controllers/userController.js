// Configure Mongoose & User Model
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Configure Passport for Local Strategy
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Define new LocalStrategy
passport.use(new LocalStrategy(
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
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			// Otherwise, invoke done, passing user as second argument
			return done(null, user);
		});
	}
));

// Export Controller Functions to Routes
module.exports = {

}