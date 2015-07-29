sweetenio.directive('deleteConfirm', function(){
	
	console.log('deleteConfirm loaded');

	return{
		// link: function(scope, element, attrs){
		// 	scope.$on('confirm-delete', function(e, notsure){
		// 		$('#deleteModal')
		// 			.modal({
		// 				onApprove: del
		// 			})
		// 			.modal('show')
		// 		;
		// 	})
		// },
		templateUrl: '/partials/modals/delete.html'
	}

})