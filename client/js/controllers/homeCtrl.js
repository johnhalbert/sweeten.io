sweetenio.controller('homeCtrl', function($window, $scope, postFactory){

	postFactory.retrievePosts(function(allPosts){
		$scope.posts = allPosts;
	})

})