sweetenio.factory('settingsFactory', function($http){
	
	var factory = {};

	factory.retrieveSettings = function(callback){
		console.log('retrieving settings');
		$http.get('/settings/show')
			.success(function(retrievedSettings){
			callback(retrievedSettings);
			console.log('settings retrieved');
			console.log(retrievedSettings);
		})
	}

	factory.updateSettings = function(settings, callback){
		$http.post('/settings/update', settings)
			.success(function(updatedSettings){
				callback(updatedSettings);
			})
	}

	factory.createNavLocation = function(newLocation, callback){
		$http.post('/locations/new', newLocation)
			.success(function(createdLocation){
				callback(createdLocation);
			})
	}

	factory.retrieveNavLocations = function(callback){
		$http.get('/locations/show')
			.success(function(retrievedLocations){
				callback(retrievedLocations);
			})
	}

	factory.associateLocationsAndNavs = function(locations, callback){
		$http.post('/locations/update', {navLocations: locations})
			.success(function(associatedLocations){
				callback(associatedLocations);
			})
	}

	return factory;

})