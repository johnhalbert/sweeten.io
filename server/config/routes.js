var NavigationController = require('../controllers/navigationController');
var PostController = require('../controllers/postController');
var UserController = require('../controllers/userController')

module.exports = function(app){
	
	// Nav Routes
	app.get('/navigation/show', function(req, res){
		// NavigationController.retrieveNav(req, res);
	})

	app.post('/navigation/update', function(req, res){
		// NavigationController.updateNav(req, res);
	})

	// Post Routes
	app.get('/posts/:posttitle/show', function(req, res){
		// PostController.retrievePost(req, res);
	})

	app.get('/posts/show', function(req, res){
		// PostController.retrievePosts(req, res);
	})

	app.post('/posts/:posttitle/update', function(req, res){
		// PostController.updatePost(req, res);
	})

	app.post('/posts/new', function(req, res){
		// PostController.createPost(req, res);
	})

}