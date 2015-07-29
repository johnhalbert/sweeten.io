sweetenio.controller('userCtrl', function($window, $scope, userFactory){
	
	$scope.regEnabled = false;

	$scope.login = function(){
		userFactory.login($scope.userCredentials, function(response){
			if (response) {
				$window.location.href = "/#/dash";
			}
		});
	}

	$scope.logout = function(){
		userFactory.logout();
	}

	$scope.register = function(){
		console.log($scope.userInfo);
		userFactory.register($scope.userInfo, function(error){
			if (error){
				$scope.error = error;
			}
		});
	}

});
