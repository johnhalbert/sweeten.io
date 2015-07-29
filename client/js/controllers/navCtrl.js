sweetenio.controller('navCtrl', function($scope, navFactory){
	
	$scope.menuItems;

	// navFactory.retrieveNav(function(nav){
	// 	$scope.menuItems = nav;
	// })

	$scope.updateNav = function(){
		navFactory.updateNav($scope.updatedNav, function(updatedNav){
			$scope.menuItems = updatedNav;
		})
	}

})