metroVocal.service('location', function($ionicPlatform, station, speech, trip, process) {
	this.getPosition = function() {
	    $ionicPlatform.ready(function() {
		    var i = 0;
		    navigator.geolocation.getCurrentPosition(function(position) {

			    while (i < trip.line.length)
				{
				    var latUp = process.getUp(trip.line[i].latitude);
				    var lonUp = process.getUp(trip.line[i].longitude);
				    var latDown = process.getDown(trip.line[i].latitude);
				    var lonDown = process.getDown(trip.line[i].longitude);

				    if ((position.coords.latitude >= latDown && position.coords.latitude <= latUp) && (position.coords.longitude >= lonDown && position.coords.longitude <= lonUp))
					{
					    if (trip.line[i].isDone)					
						return;
					    station.name = trip.line[i].name;
					    station.id = trip.line[i].id;
					    station.isBegin = trip.line[i].isBegin;
					    station.isEnd = trip.line[i].isEnd;
					    station.isDone = trip.line[i].isDone = true;
					    speech.stationName();
					    return;;
					}
				    i++;
				}
			}, function() {
			    alert("Location Error!");
			});
		});
	};
    });
    
metroVocal.service('process', function() {
	this.getUp = function(data) {
	    data = parseFloat(data);
	    data = parseFloat(data.toFixed(4)) + parseFloat(0.001);
	    return (data.toFixed(4));
	};
	
	this.getDown = function(data) {
	    data = parseFloat(data);
	    data = parseFloat(data.toFixed(4)) - parseFloat(0.001);
	    return (data.toFixed(4));
	};
    });
