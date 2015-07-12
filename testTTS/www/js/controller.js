testTTS.controller('mainCtrl', ['$scope', '$ionicPlatform', function($scope, $ionicPlatform) {
	    testTTS.geolocation = false;
			
			var options = { 
				enableHighAccuracy: true
			};

	    	onSuccess = function(position) {
			    alert('Latitude: '          + position.coords.latitude          + '\n' +
			          'Longitude: '         + position.coords.longitude         + '\n' +
			          'Altitude: '          + position.coords.altitude          + '\n' +
			          'Accuracy: '          + position.coords.accuracy          + '\n' +
			          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			          'Heading: '           + position.coords.heading           + '\n' +
			          'Speed: '             + position.coords.speed             + '\n' +
			          'Timestamp: '         + position.timestamp                + '\n');
			};

			onFail = function(error) {
			    alert('code: '    + error.code    + '\n' +
			          'message: ' + error.message + '\n');
			};

		    	navigator.geolocation.getCurrentPosition(onSuccess, onFail, options);
			alert("Je suis testTTS");  
	}]);