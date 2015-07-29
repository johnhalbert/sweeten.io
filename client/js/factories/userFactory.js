sweetenio.factory('userFactory', function($http){
	
	var factory = {}

	factory.login = function(userCredentials, callback){
		$http.post('/login', userCredentials)
			.success(function(response){
				callback(response);
			})
	}

	factory.logout = function(){
		$http.get('/logout')
	}

	factory.register = function(userInfo, callback){
		$http.post('/register', userInfo)
			.success(function(error){
				callback(error);
				console.log(error);
			})
	}

	return factory;

})