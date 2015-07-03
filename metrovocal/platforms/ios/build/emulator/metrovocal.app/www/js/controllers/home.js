metroVocal.controller('homeCtrl', ['$scope', '$ionicPlatform', 'speech', 'station', 'location', 'trip', function($scope, $ionicPlatform, speech, station, location, trip) {
	    $ionicPlatform.ready(function() {
		    alert("Ca roule");
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
