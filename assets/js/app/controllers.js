angular.module('app.controllers', ['app.services'])
.controller('HomeCtrl', function($scope, $http, $state) {
	$scope.logout = function(){
		$http.get('/logout');
		$scope.logout="You are now logged out."
		$state.go('home');
	}
})
.controller('SpaceRegisterCtrl', function($scope, $state, $http, Validate) {
	$scope.billy=true;
	var registerObj;
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
		// Validate registration input
		$scope.error = Validate.credentials(credentials);

		// If input is valid
		if(!Validate.hasError($scope.error)) {
			// Create an object with all of the registration information
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password,
				street: $scope.street,
				city: credentials.city,
				zip: $scope.zip,
				spacetypes: $scope.spacetypes,
				loading: $scope.loading,
				storage: $scope.storage,
				alcohol: $scope.alcohol,
				smoking: $scope.smoking,
				guests: $scope.guests
			};

			// Convert the street and zip into latitude and longitude
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address': $scope.street +", "+ $scope.zip}, 
				function(results, status){
					console.log(results);
					console.log(status);
					// If the conversion was successful
					if (status == google.maps.GeocoderStatus.OK){
						var latLng = results[0].geometry.location;
						// TODO: Register the user
						console.log(latLng);
						registerObj.latitude = latLng.k;
						registerObj.longitude = latLng.D;
						console.log(latLng.D);
						console.log(latLng.k);
						// TODO: Go to the next page
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
					} else {
						alert('Geocode was not successful for the following reason: ' + status);
					}

				});
		}	
	}
})

.controller('LoginCtrl', function($scope,$http) {
// 		var loginInput = {};

// 			$http.post('auth/local', loginInput)
// 			.success(function(res){

// 					$scope.loginSuccess=true;
// 					$state.go('profile');
// 			});
})
.controller('ProfileCtrl', function($scope,$http) {
	// $scope.response={};
	// $scope.deleteAccount=function(response){
	// $http.get('/user?username=' + $scope.username).success(function(response){
	// $scope.response=(response.reverse());
	// 	if( $scope.username===response.username && $scope.password===response.password){
	// 		$http.delete('/user?username=' + $scope.username).success(function(response){
	// 		$scope.response=(response);
	// 		})
	// 	}
	// 	})
	// }
})
.controller('LogoutCtrl', function($scope, $http, $state) {
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}
})
.controller('BandCtrl', function($scope, $http) {
	$scope.schotz=true;
	$scope.response={};
	var i;
	var mapOptions;
	var map;
	
	$scope.findCityBand=function(response){
		$http.get('/user?city=' + $scope.usercity).success(function(response){
		$scope.response=(response.reverse());
		console.log(response[1].longitude);

		for (var i=0; i<response.length; i++){
			if (response[i].latitude && response[i].longitude != null){
				// response = [];
				mapOptions = {
		  			zoom: 8,
		 			center: new google.maps.LatLng(response[i].longitude,response[i].latitude),
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}

				map = new google.maps.Map(document.getElementById('map'),
		    	mapOptions);
        }
        var myLatlng = new google.maps.LatLng(response[i].longitude,response[i].latitude);
      	for (var i=0; i<response.length; i++){
      			console.log(i);
        	
        		var marker = new google.maps.Marker({
      			position: myLatlng,
      			map: map,
      			title: "Hello World!"
      			})
        		}
        }
       
        });

		$scope.schotz=false;
	}
});


	// var map = new google.maps.Map(document.getElementById('map'), {
 //      				zoom: 15,
 //      				center: new google.maps.LatLng(41.923, 12.513), 
 //      				mapTypeId: google.maps.MapTypeId.ROADMAP
 //    	});

 //    	var infowindow = new google.maps.InfoWindow();

 //   		 var marker, i;

 //    	for (i = 0; i < response.length; i++) {  
 //      			marker = new google.maps.Marker({
 //        		position: new google.maps.LatLng(response[i][1], response[i][2]),
 //        		map: map
 //      		});

 //      		google.maps.event.addListener(marker, 'click', (function(marker, i) {
 //        		return function() {
 //          			infowindow.setContent(response[i][0]);
 //          			infowindow.open(map, marker);
 //        		}
 //      		})(marker, i));
 //    	}
 //      }

 //      function loadScript() {
 //        var script = document.createElement('script');
 //        script.type = 'text/javascript';
 //        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
 //        document.body.appendChild(script);
 //      }

 //      window.onload = loadScript;
