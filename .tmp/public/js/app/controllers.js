angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope) {
	
})
.controller('SpaceRegisterCtrl', function($scope, Validate) {
$scope.error = {
		identifier: '',
		password: ''
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};

	$scope.register = function(credentials) {
		$scope.error = Validate.credentials(credentials);

		if(!Validate.hasError($scope.error)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password
			};
			console.log(registerObj);
		}
	};
})

.controller('LoginCtrl', function() {

})
.controller('MasterCtrl', function() {

})
.controller('LogoutCtrl', function() {

})
.controller('BandCtrl', function() {

});