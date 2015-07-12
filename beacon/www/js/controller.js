beacon.controller('mainCtrl', ['$scope', function($scope) {
	    alert("Je suis mainCtrl");

	    // Scanning de l'environnement et affichage du nom de la station
	    $scope.scanneBeacons = function() {
// Variables de test
		var proximityUUID = "B2211AAA-6688-4225-9BB9-66EEFF4455AA"; // UUID du réseau voxilien
		var identifier = "Nom de la station"; // Nom explicite de la région
		var major = 1; // Identifiant de la station sur le réseau, par défaut
		var minor = 1; // Identifiant de l'étape dans la station par défaut
		var done = 0;
		var voxilienRegion = new ibeacon.Region({
			uuid: proximityUUID
		    });
		/*
		ibeacon.startMonitoringForRegion({
			region: voxilienRegion,
			    didDetermineState: function(result) {
			    if (result.state === "inside")
				{
				alert("Je te vois!");
				}
			    else
				alert("Je ne te vois pas!");
			}
});
		*/
		ibeacon.startRangingBeaconsInRegion({
			region: voxilienRegion,
			    didRangeBeacons: function(result) {
			    if ((result.beacons[0].major == 1) && (result.beacons[0].rssi > -70))
				{
				alert("Ludovic SANSONE");
			}
			}

		    });

	    };
	}]);
