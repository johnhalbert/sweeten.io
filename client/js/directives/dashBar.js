sweetenio.directive('dashBar', function(){
	
	return{
		link: function(scope, element, attrs){
			scope.$on('display-dash', function(e, notsure){
				$('#dashbar')
				  .sidebar('setting', 'dimPage', false)
				  .sidebar('setting', 'closable', false)
				  .sidebar('show')
				;
			})
		},
		templateUrl: '/partials/modals/dashbar.html'
	}

})