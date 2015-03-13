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
		password: ''
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
			})
			.error(function(err){
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
.controller('LogoutCtrl', function($scope, $http, $state) {
	// $scope.logout = function() {
	// 	$http.get('/logout')
	// 	.success(function(response) {
	// 		if(response.success){
	// 		$state.go('');
	// 		}
	// 	})
	// Aaron's ctrl for logout
	// $scope.loggedIn = User.isLoggedIn();
	// User.on('logout', function(u) {
	// 	$scope.loggedIn = false;
	// 	$state.go('/login');
	// 	})
})
.controller('BandCtrl', function($scope, $http) {
	$scope.usercity='';
	$scope.registerObj={};
	// Enter a city name and click the button, a list of bands
	// in that city will come up.
	$scope.findCityBand=function(){
		console.log("the click works");
		$scope.response={};
		$http.get('/auth/user').success(function(response){
			console.log(response.username);
			console.log(response.city);
		$scope.response = [];
		console.log('Detroit rock city');
		for(var i=0; i < response.length; i++){
			$scope.response.push(response[i]);
			console.log('Billy');
		}
	  })
   }
});