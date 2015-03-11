angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope) {
	
})
.controller('SpaceRegisterCtrl', function($scope, $state, Validate) {
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
				$state.go('master');
		}
			console.log(registerObj);
	
				
				
			
				console.log('go master');
		
	};
})

.controller('LoginCtrl', function() {

})
.controller('MasterCtrl', function($scope) {
	$scope.user = {
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		password: ''
	};

	$scope.register = function(user) {
		console.log('register');
		user.username = user.email;
		$http.post('/auth/local/register', user)
		.success(function(data) {
			console.log(data);
		})
		.error(function(err) {
			console.log(err);
		});
	};

})
// .controller('LogoutCtrl', function() {

// })
.controller('BandCtrl', function() {

});