sweetenio.controller('singleCtrl', function($routeParams, $scope, postFactory){
	
	postFactory.retrievePost($routeParams.postid, function(retrievedPost){
		$scope.post = retrievedPost;
	})

})