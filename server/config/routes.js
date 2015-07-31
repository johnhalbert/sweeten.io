// Require Passport
var passport = require('passport');

// Require Controllers
var NavigationController = require('../controllers/navigationController');
var PostController = require('../controllers/postController');
var UserController = require('../controllers/userController');
var SettingsController = require('../controllers/settingsController');
var AlexaController = require('../controllers/alexaController');

// Require Passport Config

require('./passport');

module.exports = function(app){

	// Alexa Routes

	app.post('/alexa', function(req, res){
		AlexaController.alexaSkill(req, res);
	})

	// Setting Routes

	app.get('/navigation/show', function(req, res){
		NavigationController.retrieveNavs(req, res);
	})

	app.post('/navigation/update', function(req, res){
		NavigationController.updateNav(req, res);
	})

	app.post('/navigation/new', function(req, res){
		NavigationController.createNav(req, res);
	})

	app.post('/settings/update', function(req, res){
		SettingsController.updateSettings(req, res);
	})

	app.get('/settings/show', function(req, res){
		SettingsController.retrieveSettings(req, res);
	})

	app.get('/locations/show', function(req, res){
		SettingsController.retrieveLocations(req, res);
	})

	app.post('/locations/new', function(req, res){
		SettingsController.createLocation(req, res);
	})

	app.post('/locations/update', function(req, res){
		SettingsController.updateLocation(req, res);
	})

	// Post Routes
	app.get('/posts/show', function(req, res){
		PostController.retrievePosts(req, res);
	})

	app.post('/posts/new', function(req, res){
		PostController.createPost(req, res);
	})

	app.get('/posts/:postid/remove', function(req, res){
		PostController.destroyPost(req, res);
	})

	app.get('/posts/:postid/show', function(req, res){
		PostController.retrievePost(req, res);
	})

	app.post('/posts/:postid/update', function(req, res){
		PostController.updatePost(req, res);
	})

	// Login & Registration Routes
	app.post('/login', passport.authenticate('local', {	successRedirect: '/#/dashboard',
														failureDirect: '/#/loginregistration'})
	);

	app.post('/register', function(req, res){
		// UserController.createUser(req, res);
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.get('/verifylogin', function(req, res){
		if (req.user) {
			res.json({userid: req.user.id});
		} else {
			res.json({error: 'User Not Logged In!'})
		}
	})

}
