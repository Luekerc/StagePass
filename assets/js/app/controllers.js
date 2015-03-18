angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope, $http) {
	$scope.logout = function(){
		$http.get('/logout');
		$scope.logout="You are now logged out."
		// $state.go('login');
	}
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
				spacetypes: $scope.spacetypes,
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
				$scope.errormessage="There was an error.  Please go Home, click Logout and try again.";
			});
				$state.go('spaceregister');
				$scope.billy=false;
				$scope.goat=false;
				console.log(registerObj);
				$scope.logout = function(){
				$http.get('/logout');
				};
		}	
	}
})

.controller('LoginCtrl', function($scope,$http) {
		var loginInput = {};

			$http.post('auth/local', loginInput)
			.success(function(res){

					$scope.loginSuccess=true;
					$state.go('home');
			});

	



})
.controller('MasterCtrl', function($scope) {

})
.controller('LogoutCtrl', function($scope, $http, $state) {
	
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('login');
	}

})
.controller('BandCtrl', function($scope, $http) {
	$scope.schotz=true;
	$scope.response={};
	$scope.findCityBand=function(response){
		$http.get('/user?city=' + $scope.usercity).success(function(response){
			$scope.response=(response.reverse());
   			})
		$scope.schotz=false;
	}
});