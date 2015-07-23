sweetenio.factory('navFactory', function($http){
	
	var factory = {}

	factory.retrieveNav = function(callback){
		$http.get('/navigation/show')
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

	return factory;

})