sweetenio.factory('navFactory', function($http){
	
	var factory = {}

	factory.retrieveNavs = function(callback){
		$http.get('/navigation/show')
			.success(function(nav){
				callback(nav);
			})
	}

	factory.retrieveNav = function(navId, callback){
		$http.get('/navigation/'+navId+'/show')
			.success(function(nav){
				callback(nav);
			})
	}

	factory.updateNav = function(nav, callback){
		$http.post('/navigation/update', nav)
			.success(function(upatedNav){
				callback(updatedNav)
			})
	}

	factory.createNav = function(nav, callback){
		$http.post('/navigation/new', nav)
			.success(function(createdNav){
				callback(createdNav)
			})
	}

	return factory;

})