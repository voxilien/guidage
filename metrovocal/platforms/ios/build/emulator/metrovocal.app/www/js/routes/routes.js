metroVocal.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/home', {
		    templateUrl: 'view/home.html', controller: 'homeCtrl'})
	    .when('/', {
		    templateUrl: 'view/main.html', controller: 'mainCtrl'})
	    .when('/about', {
		    templateUrl: 'view/about.html', controller: 'aboutCtrl'})
	    .when('/lines', {
		    templateUrl: 'view/lines.html', controller: 'linesCtrl'})
	    .when('/preferences', {
		    templateUrl: 'view/preferences.html', controller: 'preferencesCtrl'})
		.otherwise({redirectTo: '/home'});
	    }]);
