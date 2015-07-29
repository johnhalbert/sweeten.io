sweetenio.factory('dashFactory', function($http){
	
	$('.ui.sidebar')
	  .sidebar('setting', 'dimPage', false)
	  .sidebar('setting', 'closable', false)
	  .sidebar('show')
	;

	var factory = {};

	return factory;

})