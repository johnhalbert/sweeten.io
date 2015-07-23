sweetenio.factory('postFactory', function($http){

	var factory = {};

	factory.retrievePosts = function(callback){
		$http.get('/posts/show')
			.success(function(allPosts){
				callback(allPosts);
			})
	}

	factory.retrievePost = function(postTitle, callback){
		$http.get('/posts/'+postTitle+'/show')
			.success(function(post){
				callback(post);
			})
	}

	factory.createPost = function(post, callback){
		$http.post('/posts/new', post)
			.success(function(createdPost){
				callback(createdPost)
			})
	}

	factory.updatePost = function(post, callback){
		$http.post('/posts/'+post.title+'/update')
			.success(function(updatedPost){
				callback(updatedPost)
			})
	}

	return factory;

})