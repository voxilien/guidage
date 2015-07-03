metroVocal.controller('preferencesCtrl', ['$scope', function($scope) {
	    $scope.langue = [];
	    $scope.goToPrevious = function() {
		window.location.href = '#/';
	    };
	    $scope.setPreferences = function() {
	    alert($scope.langue);	    

	    };
	}]);
