angular.module('app.controllers', ['app.services'])

.controller('NavCtrl', function($scope, $http, $state){
    $scope.logOut = function () {
        $http.post('/logout')
        .success(function(response) {
            if (response.success)
                $state.go('home');
        })
    }
    $scope.loginRoute = function() {
        $state.go('login');

    }
    $scope.createProfileRoute = function() {
        $state.go('spaceregister');
    }

})
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
						registerObj.latitude = latLng.D;
						registerObj.longitude = latLng.k;
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

.controller('LoginCtrl', function($scope,$http, $state) {
		$scope.login=function(username, password){
			loginInput={
				identifier: username,
				password: password
			};
			$http.post('/auth/local', loginInput)
			.success(function(res){
				console.log(res);
				// for(var i=0; i<res.length; i++){
					// if($scope.useremail===res[i].username && $scope.userpassword===res[i].password){
					// 	console.log(res[i]);
				$state.go('profile');
			})
				// }	
		};
})
.controller('ProfileCtrl', function($scope,$http,$state) {
	// $scope.goat=false;
	$scope.login=true;
	$http.get('/auth/user')
			.success(function(res){
				console.log(res);
				$scope.response=res;
				$scope.login=false;
			})
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}
		//use a function modeled after scope.register to do a put request on the /user/userid
	$scope.changes = function() {
		$http.put('/user/userid').success
	}


	
})

.controller('LogoutCtrl', function($scope, $http, $state) {
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}
})


.controller('BandCtrl', function($scope, $http) {
	$scope.schotz=true;
	$scope.response=[];
	var i;
	var mapOptions;
	var map = false;
	var markerObject;
	
	$scope.findCityBand=function(response){
		$http.get('/user?city=' + $scope.usercity).success(function(response){
			$scope.response=(response.reverse());
		
			var bounds = new google.maps.LatLngBounds();
    		var infowindow = new google.maps.InfoWindow();

			for (var i=0; i<response.length; i++){
				if (response[i].latitude && response[i].longitude){
				
					mapOptions = {
		  				zoom: 8,
		 				center: new google.maps.LatLng(response[i].longitude,response[i].latitude),
						mapTypeId: google.maps.MapTypeId.ROADMAP
					}
				
					console.log(response[i].longitude);
					console.log(response[i].latitude);
					
					if(map === false){
						map = new google.maps.Map(document.getElementById('map'),
			    		mapOptions)
					}
	        
	        		var myLatlng = new google.maps.LatLng(response[i].longitude,response[i].latitude)
	      			
	    //     		var infowindow = new google.maps.InfoWindow({
   		// 			 content: "<span>Text goes here</span>"
					// });

	        		var marker = new google.maps.Marker({
	      				position: myLatlng,
	      				map: map,
	      				title:  response[i].username
	      				
	      			});
	    //   			google.maps.event.addListener(marker, 'click', function() {
  			// 		infowindow.open(map,marker);
					// });
	      			bounds.extend(marker.position);
        		}
        	}
        	map.fitBounds(bounds);
        })
		$scope.schotz=false;
		$scope.usercity="";

	};
	});

// 	$scope.schotz=true;
	
// 	$scope.findCityBand=function(response){
// 		$http.get('/user?city=' + $scope.usercity).success(function(response){
// 			$scope.response=(response.reverse());
// 			locations=$scope.response;
// 			var bound = new google.maps.LatLngBounds();
// 			var infowindow = new google.maps.InfoWindow();

// 			console.log(locations);

// 			for (i = 0; i < locations.length; i++) {
// 				if()
//   					bound.extend( new google.maps.LatLng(locations[i].latitude, locations[i].longitude));

//    		 			var mapOptions = {
//       					zoom: 10,
//       					center: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
//       					mapTypeId: google.maps.MapTypeId.ROADMAP
//     				};
//     				console.log(locations[i].username, locations[i].latitude);
//     				var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    		
//     				var latlng = new google.maps.LatLng(locations[i].latitude, locations[i].longitude);
//         			bound.extend(latlng);

//     				var marker = new google.maps.Marker({
//             				position: latlng,
//             				map: map,
//             				title: locations[i].username
//         			});
//     		}
//     		map.fitBounds(bound);
//       	})
   	 		
// 	}
// 		$scope.schotz=false;
// 		$scope.usercity="";
// });

// 	