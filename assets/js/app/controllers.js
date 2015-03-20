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
	// var bounds = new google.maps.LatLngBounds();
	// var infowindow = new google.maps.InfoWindow();    
	
	$scope.findCityBand=function(response){
		$http.get('/user?city=' + $scope.usercity).success(function(response){
		$scope.response=(response.reverse());
		console.log(response);


			for (var i=0; i<response.length; i++){
			// console.log(response[i].latitude);
			// console.log(response[i].longitude);
				var mapOptions = {
		  			zoom: 8,
		 			center: new google.maps.LatLng(response[i].latitude, response[i].longitude)
				};
				var map = new google.maps.Map(document.getElementById('map'),
		    		mapOptions);

				var myLatlng = new google.maps.LatLng(response[i].latitude,response[i].longitude);
        	
        		var marker = new google.maps.Marker({
      				position: myLatlng,
      				map: map,
      				title: "Hello Wolrd!"
      			})
        	}

        });
		$scope.schotz=false;
	}
      // google.maps.event.addDomListener(window, 'load', initialize);
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
