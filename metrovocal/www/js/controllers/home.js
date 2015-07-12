metroVocal.controller('homeCtrl', ['$scope', '$ionicPlatform', 'speech', 'station', 'location', 'trip', function($scope, $ionicPlatform, speech, station, location, trip) {
	    $ionicPlatform.ready(function() {
	    	alert("ionicPlatform");
	    	var onSuccess = function(position) {
			    alert('Latitude: '          + position.coords.latitude          + '\n' +
			          'Longitude: '         + position.coords.longitude         + '\n' +
			          'Altitude: '          + position.coords.altitude          + '\n' +
			          'Accuracy: '          + position.coords.accuracy          + '\n' +
			          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
			          'Heading: '           + position.coords.heading           + '\n' +
			          'Speed: '             + position.coords.speed             + '\n' +
			          'Timestamp: '         + position.timestamp                + '\n');
			};
			function onError(error) {
			    alert('code: '    + error.code    + '\n' +
			          'message: ' + error.message + '\n');
			}
		    navigator.geolocation.getCurrentPosition( onSuccess, onError );
		});

	    location.getPosition();
	    setInterval(function() {
		    location.getPosition();
		}, 10000);

	    $scope.goToLines = function() {
		window.location.href = "#/lines";
	    };
	    $scope.goToPreferences = function() {
		window.location.href = "#/preferences";
	    };
	    $scope.goToAbout = function() {
		window.location.href = "#/about";
	    };
	}]);
