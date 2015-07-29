sweetenio.controller('dashCtrl', function($window, $scope, dashFactory, userFactory){
	
	// Check login
	if (!userFactory.loggedIn) {
		$window.location.href = '/#/login';
	} else {
		$scope.$emit('display-dash');
	}

})