sweetenio.directive('sweetenPreview', function(){

	return {
		link: function(scope, element, attrs){
			scope.$on('open-modal', function(e, notsure){
				$('#previewModal').modal({
			  		onApprove: scope.postAction,
			  		transition: 'horizontal flip',
			    	blurring: true
			  	})
			  	.modal('show');
			})
		},
		templateUrl: '/partials/modals/post-preview.html',
	}

})