sweetenio.factory('userFactory', function($http){

	$http.get('/verifylogin')
		.success(function(result){
			if (result.userid) {
				factory.loggedIn = true;
			}
		})

	var factory = {}

	factory.loggedIn = false;

	factory.login = function(userCredentials, callback){
		$http.post('/login', userCredentials)
			.success(function(response){
				callback(response);
			})
	}

	factory.logout = function(){
		$http.get('/logout');
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