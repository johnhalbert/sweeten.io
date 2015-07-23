sweetenio.controller('postCtrl', function($scope, $routeParams, postFactory){

	$scope.htmlContent = "<h1>Does this work?</h1>"

	if ($routeParams.postname){
		postFactory.retrievePost($routeParams.postname, function(retrievedPost){
			$scope.post = retrievedPost;
		})
	}

	$scope.createPost = function(){
		postFactory.createPost($scope.post, function(createdPost){
			$scope.post = createdPost;
		})
	}

	$scope.updatePost = function(){
		postFactory.updatePost($scope.post, function(updatedPost){
			$scope.post = updatedPost;
		})
	}
	
})