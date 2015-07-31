sweetenio.controller('settingsCtrl', function($window, $scope, navFactory, userFactory, settingsFactory){
	
	// Check Login
	if (!userFactory.loggedIn) {
		$window.location.href = '/#/login';
	} else {

		$scope.navLocations = [];
		$scope.settings = {};
		$scope.menu = {};
		$scope.menu.navItems = [];

		settingsFactory.retrieveSettings(function(retrievedSettings){
			$scope.settings = retrievedSettings;
		})

		navFactory.retrieveNavs(function(retrievedNavs){
			$scope.navs = retrievedNavs
		})

		settingsFactory.retrieveNavLocations(function(retrievedLocations){
			$scope.navLocations = retrievedLocations;
		})

		$scope.createMenuEntry = function(){
			$scope.menu.navItems.push($scope.newItem);
			$scope.newItem = {};
		}

		$scope.saveMenu = function(){
			navFactory.createNav($scope.menu, function(createdNav){
				$scope.menu = createdNav;
				$scope.navs.push({name: createdNav.name, _id: createdNav._id});
				$scope.menu.name = '';
			})
		}

		$scope.updateSettings = function(){
			settingsFactory.updateSettings($scope.settings, function(confirmedSettings){
				// Do something here for confirmation, trigger ng-show.
			})
		}

		$scope.associateLocationsAndNavs = function(){
			console.log($scope.navLocations);
			settingsFactory.associateLocationsAndNavs($scope.navLocations, function(updatedLocationsAndNavs){
				$scope.navLocations = updatedLocationsAndNavs;
			})
		}

		$scope.createNavLocation = function(){
			$scope.newLocation.setting_id = $scope.settings._id;
			settingsFactory.createNavLocation($scope.newLocation, function(createdLocation){
				$scope.navLocations.push(createdLocation);
				$scope.newLocation = {}
			})
		}

		$scope.removeNavItem = function(idx){
			$scope.menu.navItems.splice(idx, 1);
		}

	}

})