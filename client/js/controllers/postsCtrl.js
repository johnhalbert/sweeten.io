sweetenio.controller('postsCtrl', function($scope, postFactory){
	
	postFactory.retrievePosts(function(retrievedPosts){
		$scope.posts = retrievedPosts;
	})

	$scope.pendingDelete = {};

	$scope.confirmDelete = function(post){
		$scope.pendingDelete = post
		$('#deleteModal')
			.modal({
				onApprove: $scope.deletePost
			})
			.modal('show')
		;
	}

	$scope.deletePost = function(){
		postFactory.destroyPost($scope.pendingDelete, function(updatedPosts){
			$scope.posts = updatedPosts;
		})
	}

})