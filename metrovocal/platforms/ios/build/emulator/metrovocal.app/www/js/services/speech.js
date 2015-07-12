metroVocal.service('speech', function(station, $ionicPlatform) {
	this.stationName =	function() {
	    $ionicPlatform.ready(function() {
		    ttsPlugin.initTTS(function() {
			    ttsPlugin.setLanguage("fr-FR");
			    if (station.isBegin)
				{
				    ttsPlugin.speak("Départ à la station, " + station.name);
				    return;
				}
			    ttsPlugin.speak(station.name + "?");
			    setTimeout(function() {
				    ttsPlugin.speak(station.name);
				    if (station.isEnd == true)
					ttsPlugin.speak("Veuillez descendre à cette station");
				}, 6000);
			});
		});
	};
});