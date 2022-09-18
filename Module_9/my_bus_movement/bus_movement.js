<<<<<<< HEAD
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VsZnJhbmsiLCJhIjoiY2w3dHRzaDNkMDB4ZzN3bDRrbGE3NWd0MiJ9.2SMtsC-W2cGRP9bzvW3MVA'

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-71.089191,42.350247],
	zoom: 12
}) ;
var markers = [];
console.log('Markers Array'+ markers) 


// load map
function init(){
	addMarkers();
=======
var map;
var markers = [];

// load map
function init(){
	var myOptions = {
		zoom      : 13,
		center    : { lat:42.353350,lng:-71.091525},
        tilt: 45,
		mapTypeId : google.maps.MapTypeId.STREET,
		styles: [
			{
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#242f3e"
				}
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#746855"
				}
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#242f3e"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "administrative.locality",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#d59563"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#d59563"
				}
			  ]
			},
			{
			  "featureType": "poi.business",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#263c3f"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#6b9a76"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#38414e"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#212a37"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.icon",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#9ca5b3"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#746855"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#1f2835"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#f3d19c"
				}
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#2f3948"
				}
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#d59563"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#17263c"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#515c6d"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#17263c"
				}
			  ]
			}
		  ]
        
	};
    
	var element = document.getElementById('map');
  	map = new google.maps.Map(element, myOptions);
  	addMarkers();
>>>>>>> b47ecac1c0a0aea5f411fac0803a2a3c2763822d

}


// Add bus markers to map
async function addMarkers(){
	// get bus data
	var locations = await getBusLocations();
<<<<<<< HEAD
	console.log(new Date());
	console.log(locations);


	// loop through data, add bus markers
	locations.forEach(function(bus){
		var marker = getMarker(bus.attributes.label);		
		if (marker){
			moveMarker(marker,bus);
			console.log('Move: '+bus.attributes.longitude+' '+ bus.attributes.latitude+' '+marker._element.id)
			console.log('Move: '+marker._element.id)	
		}
		else{
			addMarker(bus);	
			console.log('Add: '+bus.attributes.longitude+' '+ bus.attributes.latitude+' '+bus.attributes.label)		
=======
	

	// loop through data, add bus markers
	locations.forEach(function(bus){
		var marker = getMarker(bus.id);		
		if (marker){
			moveMarker(marker,bus);
		}
		else{
			addMarker(bus);			
>>>>>>> b47ecac1c0a0aea5f411fac0803a2a3c2763822d
		}
	});

	// timer
<<<<<<< HEAD
=======
	console.log(new Date());
>>>>>>> b47ecac1c0a0aea5f411fac0803a2a3c2763822d
	setTimeout(addMarkers,15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	var url = 'https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]=1&include=trip';	
	var response = await fetch(url);
	var json     = await response.json();
	return json.data;
}

function addMarker(bus){
<<<<<<< HEAD
	var marker = new mapboxgl.Marker({
		"properties":{
			"id": bus.attributes.label}})
	marker._element.id = bus.attributes.label
	marker.setLngLat([bus.attributes.longitude,bus.attributes.latitude])
	markers.push(marker)
	marker.addTo(map)
	console.log('Markers Array in Function' +marker)
		};


function moveMarker(marker,bus) {
	// move icon to new lat/lon
	marker.setLngLat([bus.attributes.longitude,bus.attributes.latitude])
	.addTo(map)
	console.log('moveMarker: '+marker)
}
	

function getMarker(label){
	var marker = markers.find(
		function(item){
	console.log('getMaker '+item._element.id)
		return item._element.id ===label;
	}); 
	console.log('GetMaker'+marker)
	return marker;
}	
=======
	var icon = getIcon(bus);
	var marker = new google.maps.Marker({
	    position: {
	    	lat: bus.attributes.latitude, 
	    	lng: bus.attributes.longitude
	    },
	    map: map,
	    icon: icon,
	    id: bus.id
	});
	markers.push(marker);
}

function getIcon(bus){
	// select icon based on bus direction
	if (bus.attributes.direction_id === 0) {
		return 'arrow_left.png';
	}
	return 'arrow_right.png';	
}

function moveMarker(marker,bus) {
	// change icon on changed direction
	var icon = getIcon(bus);
	marker.setIcon(icon);

	// move icon to new lat/lon
    marker.setPosition( {
    	lat: bus.attributes.latitude, 
    	lng: bus.attributes.longitude
	});
}

function getMarker(id){
	var marker = markers.find(function(item){
		return item.id === id;
	});
	return marker;
}
>>>>>>> b47ecac1c0a0aea5f411fac0803a2a3c2763822d

window.onload = init;
