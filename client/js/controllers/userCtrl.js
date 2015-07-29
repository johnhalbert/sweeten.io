sweetenio.controller('userCtrl', function($window, $scope, userFactory){

		$scope.regEnabled = false;

		$scope.login = function(){
			userFactory.login($scope.userCredentials, function(response){
				if (response) {
					userFactory.loggedIn = true;
					$window.location.href = '/#/dash';
				}
			});
		}

		$scope.logout = function(){
			userFactory.loggedIn = false;
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
