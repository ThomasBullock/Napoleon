(function(global){

const menuToggle = document.querySelector('.header__nav-menu-button');
const menu = document.querySelector('.header__row');

window.addEventListener('resize', function(){
  console.log('resize!');
  var intViewportWidth = window.innerWidth;
  if(intViewportWidth > 899) {
		clearTimeout(resizeTimeout);
		var resizeTimeout = setTimeout( () => {
    	menu.classList.remove("show");
		}, 200);

  }
});

let message = 'Application is running!'

console.log(message)
	


menuToggle.addEventListener('click', function(){
	menu.classList.toggle('show')
})	
		

	
}(window));

function initMap() {

var styles = [
        {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "-70"
                },
                {
                    "lightness": "24"
                },
                {
                    "gamma": "5"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{color: '#d59563'}] 
            
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        // {
        //     "featureType": "landscape.man_made",
        //     "elementType": "geometry",
        //     "stylers": [
        //         {
        //             "color": "#f7f1df"
        //         }
        //     ]
        // },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d0e3b4"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fbd3da"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bde6ab"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffe15f"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#efd151"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "black"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cfb2db"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#91c9f7"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 48.4085152, lng: 9.9428302},
  zoom: 5,
  styles: styles,
  mapTypeControl: false
});

function createMarkerList(locations, info, route) {
		const markers = [];
    // console.log(route)
    // var largeInfowindow = new google.maps.InfoWindow();
    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = '../img/battle_symbol.png';
    // this.makeMarkerIcon('0091ff');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = '../img/battle_symbol_hover.png';

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      var position = locations[i].location;
      var title = locations[i].title;
      var result = locations[i].result;
      // Create a marker per location, and put into markers array.
      var marker = new google.maps.Marker({
        position: position,
        title: title,
        result: result,
        animation: google.maps.Animation.DROP,
        icon: defaultIcon,
        id: i
      });
      console.log(marker)
      
      // Push the marker to our array of markers.
      markers.push(marker);
      
      console.log(markers);
      // Create an onclick event to open the large infowindow at each marker.
      marker.addListener('click', function() {
        // view.populateInfoWindow(this, largeInfowindow);
      });
      // Two event listeners - one for mouseover, one for mouseout,
      // to change the colors back and forth.
      marker.addListener('mouseover', function() {
        this.setIcon(highlightedIcon);
      });
      marker.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
      });
    }
    // if(route) {
    //     this.createRoute(route);
    // }
    // this.showListings(info);
}

var data = [
		{"title": "Battle of Ulm", "location": {"lat": 48.4085152, "lng": 9.9428302}, "date": {"start": "1805-10-15", "end": "1805-10-20"}, "result": "Decisive French victory" },
		{"title": "Battle of Trafalgar", "location": {"lat": 36.327282, "lng": -6.215012}, "date": {"start": "1805-10-21"}, "result": "Decisive British victory" },
		{"title": "Battle of Austerlitz", "location":{"lat": 49.1410606, "lng": 16.7668404}, "date": {"start": "1805-12-02" }, "result": "Decisive French victory"}		
		]

createMarkerList(data, null, null);
	
}

initMap();
//# sourceMappingURL=app.js.map
