sweetenio.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/views/home.html'
		})
		.when('/comments', {
			templateUrl: 'partials/views/comments.html'
		})
		.when('/pages', {
			templateUrl: 'partials/views/pages.html'
		})
		.when('/pages/new', {
			templateUrl: 'partials/views/page.html'
		})
		.when('/users', {
			templateUrl: 'partials/views/users.html'
		})
		.when('/dash', {
			templateUrl: 'partials/views/dashboard.html'
		})
		.when('/settings', {
			templateUrl: 'partials/views/settings.html'
		})
		.when('/posts/new', {
			templateUrl: 'partials/views/post.html'
		})
		.when('/posts', {
			templateUrl: 'partials/views/posts.html'
		})
		.when('/posts/:postid/update', {
			templateUrl: 'partials/views/post.html'
		})
		.when('/login', {
			templateUrl: 'partials/views/loginregister.html'
		})
		.when('/:postname/:postid', {
			templateUrl: 'partials/views/single.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})