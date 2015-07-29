sweetenio.controller('postsCtrl', function($window, $scope, postFactory, userFactory){

		// Retrieve post list
		postFactory.retrievePosts(function(retrievedPosts){
			$scope.posts = retrievedPosts;
		})

		$scope.pendingDelete = {};

		$scope.confirmDelete = function(post){
			// Check Login
			if (!userFactory.loggedIn) {
				$window.location.href = '/#/login';
			} else {
				$scope.pendingDelete = post
				$('#deleteModal')
					.modal({
						onApprove: $scope.deletePost
					})
					.modal('show')
				;
			}
		}

		$scope.deletePost = function(){
			// Check Login
			if (!userFactory.loggedIn) {
				$window.location.href = '/#/login';
			} else {
				postFactory.destroyPost($scope.pendingDelete, function(updatedPosts){
					$scope.posts = updatedPosts;
				})
			}
		}

	

})