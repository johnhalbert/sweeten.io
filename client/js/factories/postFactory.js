sweetenio.factory('postFactory', function($http){

	var factory = {};

	factory.retrievePosts = function(callback){
		$http.get('/posts/show')
			.success(function(allPosts){
				callback(allPosts);
			})
	}

	factory.retrievePost = function(postid, callback){
		$http.get('/posts/'+postid+'/show')
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
		$http.post('/posts/'+post._id+'/update', post)
			.success(function(updatedPost){
				callback(updatedPost)
			})
	}

	factory.destroyPost = function(post, callback){
		$http.get('/posts/'+post._id+'/remove')
			.success(function(updatedPosts){
				callback(updatedPosts);
			})
	}

	return factory;

})