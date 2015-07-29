sweetenio.controller('navCtrl', function($window, $scope, navFactory, userFactory){

		$scope.menuItems;

		// navFactory.retrieveNav(function(nav){
		// 	$scope.menuItems = nav;
		// })

		$scope.updateNav = function(){
			// Check login
			if (!userFactory.loggedIn) {
				$window.location.href = '/#/login';
			} else {
				navFactory.updateNav($scope.updatedNav, function(updatedNav){
					$scope.menuItems = updatedNav;
				})
			}
		}


})