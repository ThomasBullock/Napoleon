"use strict";

var styles = [{
    "featureType": "all",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }, {
        "saturation": "-70"
    }, {
        "lightness": "24"
    }, {
        "gamma": "5"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{ color: '#d59563' }]

}, {
    "featureType": "administrative.neighborhood",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.neighborhood",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
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
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [{
        "color": "#d0e3b4"
    }]
}, {
    "featureType": "landscape.natural",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "landscape.natural.landcover",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "landscape.natural.terrain",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [{
        "color": "#fbd3da"
    }]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "color": "#bde6ab"
    }]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ffe15f"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#efd151"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ffffff"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "black"
    }]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#cfb2db"
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#91c9f7"
    }]
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
}];

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

(function (global) {

    console.log([1, 2, 3, 4, 5].includes(4)); // to test transpiling

    var menuToggle = document.querySelector('.header__nav-menu-button');
    var menu = document.querySelector('.header__row');

    window.addEventListener('resize', function () {
        console.log('resize!');
        var intViewportWidth = window.innerWidth;
        if (intViewportWidth > 899) {
            clearTimeout(resizeTimeout);
            var resizeTimeout = setTimeout(function () {
                menu.classList.remove("show");
            }, 200);
        }
    });

    var message = 'Application is running!';

    console.log(message);

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
})(window);

function initMap() {
    console.log('initialize map!');
    var markers = [];
    var map,
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.4085152, lng: 9.9428302 },
        zoom: 5,
        styles: styles,
        mapTypeControl: false
    });

    function createMarkerList(battles) {
        // console.log(route)
        var largeInfowindow = new google.maps.InfoWindow();
        // Style the markers a bit. This will be our listing marker icon.
        var defaultIcon = '/static/img/battle_symbol.png';
        // this.makeMarkerIcon('0091ff');

        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
        var highlightedIcon = '/static/img/battle_symbol_hover.png';

        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < battles.length; i++) {
            // Get the position from the location array.
            var position = battles[i].location;
            var title = battles[i].title;
            var result = battles[i].result;
            var date = battles[i].date;
            console.log(date);
            // Create a marker per location, and put into markers array.
            var marker = new google.maps.Marker({
                position: position,
                title: title,
                date: date,
                result: result,
                animation: google.maps.Animation.DROP,
                icon: defaultIcon,
                id: i
            });
            console.log(marker);

            // Push the marker to our array of markers.
            markers.push(marker);

            console.log(markers);
            // Create an onclick event to open the large infowindow at each marker.
            marker.addListener('click', function () {
                console.log(this);
                populateInfoWindow(this, largeInfowindow);
            });
            // Two event listeners - one for mouseover, one for mouseout,
            // to change the colors back and forth.
            marker.addListener('mouseover', function () {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function () {
                this.setIcon(defaultIcon);
            });
        }
        // if(route) {
        //     this.createRoute(route);
        // }
        showListings(battles);
    } // end markers

    function dateFormat(dateObj) {

        var start = new Date(dateObj.start);
        var end = dateObj.end ? new Date(dateObj.end) : null;

        console.log(start, end);

        if (!end) {
            return month[start.getMonth()] + " " + start.getDate() + " " + start.getFullYear();
        } else if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
            return month[start.getMonth()] + " " + start.getDate() + " to " + end.getDate() + " " + start.getFullYear();
        }
    }

    function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            // Clear the infowindow content to give the streetview time to load.
            infowindow.setContent('');
            infowindow.marker = marker;
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function () {
                infowindow.marker = null;
            });
            infowindow.setContent("<div class=\"info-window\">\n                                    <h2>  " + marker.title + " </h2>\n                                    <h5> " + dateFormat(marker.date) + "</h5>\n                                    \n                                    <p> " + marker.result + " </p>\n                                </div>");

            // Open the infowindow on the correct marker.
            infowindow.open(map, marker);
        }
    }

    function showListings(info) {

        var bounds = new google.maps.LatLngBounds();
        markers.forEach(function (marker) {
            marker.setMap(map);
            bounds.extend(marker.position);
        });
        map.fitBounds(bounds);
        console.log(info);
    }

    var data = [{ "title": "Battle of Ulm", "location": { "lat": 48.4085152, "lng": 9.9428302 }, "date": { "start": "1805-10-15", "end": "1805-10-20" }, "result": "Decisive French victory" }, { "title": "Battle of Trafalgar", "location": { "lat": 36.327282, "lng": -6.215012 }, "date": { "start": "1805-10-21" }, "result": "Decisive British victory" }, { "title": "Battle of Austerlitz", "location": { "lat": 49.1410606, "lng": 16.7668404 }, "date": { "start": "1805-12-02" }, "result": "Decisive French victory" }];

    createMarkerList(local_data.battles, null, null);
}

// getLocalData(local_data.battles);

// function getLocalData(data) {
//     console.log(data)
//     const 
// }

// var google = google || null;

// if(google) {
//   initMap();  
// }


//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map