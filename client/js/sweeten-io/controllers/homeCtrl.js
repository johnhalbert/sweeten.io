sweetenio.controller('homeCtrl', function($scope, postFactory){

	postFactory.retrievePosts(function(allPosts){
		$scope.posts = allPosts;
		// Make snippets within here!?? Or is there an angular filter that will do this for me?..
	})

})