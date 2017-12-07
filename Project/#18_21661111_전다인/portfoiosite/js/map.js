var geocoder = new google.maps.Geocoder();
var address = "San Diego, CA, 92111"; //Add your address here, all on one line.
addresses = ["San Diego, CA 92111",
						 "Cancun, Mexico",
						 "Sydney, Australia"];

var latitude;
var longitude;
var color = "#85cad1"; //Set your tint color. Needs to be a hex value.

function getGeocode() {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
    		latitude = results[0].geometry.location.lat();
			longitude = results[0].geometry.location.lng(); 
			initGoogleMap();
    	} 
	});
}

function initGoogleMap() {
	var styles = [
	    {
	      stylers: [
	        { saturation: -100 }
	      ]
	    }
	];
	
	var options = {
		mapTypeControlOptions: {
			mapTypeIds: ['Styled']
		},
		center: new google.maps.LatLng(latitude, longitude),
		zoom: 2,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		zoomControl: true,
		disableDefaultUI: true,	
		mapTypeId: 'Styled'
	};
	var div = document.getElementById('googleMap');
	var map = new google.maps.Map(div, options);
	marker = new google.maps.Marker({
	    map:map,
	    draggable:false,
	    animation: google.maps.Animation.DROP,
	    position: new google.maps.LatLng(latitude,longitude)
	});
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
	map.mapTypes.set('Styled', styledMapType);
	
	var infowindow = new google.maps.InfoWindow({
	      content: "<div class='iwContent'>"+address+"</div>"
	});
	google.maps.event.addListener(marker, 'click', function() {
	    window.location = "http://local.wordpress.dev/blog";
	});
	google.maps.event.addListener(marker, 'mouseover', function() {
	    infowindow.open(map,marker);
	});
		
	
	bounds = new google.maps.LatLngBounds(
	  new google.maps.LatLng(-84.999999, -179.999999), 
	  new google.maps.LatLng(84.999999, 179.999999));

	rect = new google.maps.Rectangle({
	    bounds: bounds,
	    fillColor: color,
	    fillOpacity: 0.2,
	    strokeWeight: 0,
	    map: map
	});

	var listener = google.maps.event.addListener(map, "idle", function() { 
		$('#map-banner').show();
		$("#map-header").fitText(1.2, { minFontSize: '20px', maxFontSize: '400px'});
	  google.maps.event.removeListener(listener); 
	});

}
google.maps.event.addDomListener(window, 'load', getGeocode);