sweetenio.controller('settingsCtrl', function($scope, navFactory){
	
	$scope.menu = {};
	$scope.menu.navItems = [];

	navFactory.retrieveNavs(function(retrievedNavs){
		$scope.navs = retrievedNavs
		console.log(retrievedNavs);
	})

	$scope.createMenuEntry = function(){
		$scope.menu.navItems.push($scope.newItem);
		$scope.newItem = {};
	}

	$scope.saveMenu = function(){
		navFactory.createNav($scope.menu, function(createdNav){
			$scope.menu = createdNav;
			$scope.navs.push({name: createdNav.name})
		})
	}

})