sweetenio.controller('postCtrl', function($scope, $routeParams, postFactory){

	$scope.successfulPost = false;
	$scope.successfulUpdate = false;

	$scope.editing = false;
	$scope.post = {}
	$scope.post.tags = [];
	$scope.post.categories = [];

	if ($routeParams.postid){
		postFactory.retrievePost($routeParams.postid, function(retrievedPost){
			$scope.post = retrievedPost;
			$scope.editing = true;
		})
	}

	$scope.postAction = function(){
		if ($scope.editing) {
			$scope.updatePost();
		} else {
			$scope.createPost();
		}
	}

	$scope.createPost = function(){
		$scope.post.permalink = $scope.post.title.replace(/\s+/g, '');
		$scope.post.permalink = $scope.post.permalink.toLowerCase();
		postFactory.createPost($scope.post, function(createdPost){
			$scope.successfulPost = true;
			$scope.post = createdPost;
			$scope.editing = true;
		})
	}

	$scope.updatePost = function(){
		postFactory.updatePost($scope.post, function(updatedPost){
			if ($scope.successfulPost) {
				$scope.successfulPost = false;
			}
			$scope.successfulUpdate = true;
			$scope.post = updatedPost;
		})
	}

	$scope.addCategory = function(){
		var search = false;
		for (var category in $scope.post.categories) {
			if ($scope.post.categories[category] === $scope.post.category) {
				search = true;
			}
		}
		if (!search) {
			$scope.post.categories.push($scope.post.category);
		}
		$scope.post.category = '';
	}

	$scope.removeCategory = function(index){
		$scope.post.categories.splice(index, 1);
	}

	$scope.addTag = function(){
		var search = false;
		for (var tag in $scope.post.tags) {
			if ($scope.post.tags[tag] === $scope.post.tag) {
				search = true;
			}
		}
		if (!search) {
			$scope.post.tags.push($scope.post.tag);
		}
		$scope.post.tag = '';
	}

	$scope.removeTag = function(index){
		$scope.post.tags.splice(index, 1);
	}

	$scope.previewPost = function(){
		$scope.$emit('open-modal');
	}
	
})