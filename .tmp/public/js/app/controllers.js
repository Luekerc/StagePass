angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope) {
	
})
.controller('SpaceRegisterCtrl', function($scope, $state, $http, Validate) {
	$scope.billy=true;
	$scope.goat=true;
	$scope.error = {
		identifier: '',
		password: '',
		city: ''
	};
	$scope.credentials = {
		identifier: '',
		password: '',
		city: ''
	};

	$scope.register = function(credentials) {
		$scope.error = Validate.credentials(credentials);

		if(!Validate.hasError($scope.error)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password,
				city: credentials.city,
				type: $scope.spacetypes,
				loading: $scope.loading,
				storage: $scope.storage,
				alcohol: $scope.alcohol,
				smoking: $scope.smoking,
				guests: $scope.guests
			};
			$http.post('/auth/local/register', registerObj)
			.success(function(res){
				console.log(res);
			}).error(function(err){
				console.log(err);
			});
				$state.go('spaceregister');
				$scope.billy=false;
				$scope.goat=false;
				console.log(registerObj);
		}
			
	};
})

.controller('LoginCtrl', function() {

})
.controller('MasterCtrl', function($scope) {
// 	$scope.user = {
// 		username: '',
// 		email: '',
// 		firstName: '',
// 		lastName: '',
// 		address: '',
// 		city: '',
// 		state: '',
// 		zip: '',
// 		password: ''
// 	};

// 	$scope.register = function(user) {
// 		console.log('register');
// 		user.username = user.email;
// 		$http.post('/auth/local/register', user)
// 		.success(function(data) {
// 			console.log(data);
// 		})
// 		.error(function(err) {
// 			console.log(err);
// 		});
// 	};

})
.controller('LogoutCtrl', function() {

})
.controller('BandCtrl', function() {

});