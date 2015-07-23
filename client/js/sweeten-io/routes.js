sweetenio.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/:postname', {
			templateUrl: 'views/single.html'
		})
		.when('/posts/new', {
			templateUrl: 'views/post.html'
		})
		.when('/posts/:postname/update', {
			templateUrl: 'views/post.html'
		})
})