var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        //center: {lat: 2.8, lng: -187.3},
        mapTypeId: 'terrain'
    });

    // Create a script tag and set the USGS URL as the source.
    var script = document.createElement('script');
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
} // end of function initMap()

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function (results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        }); // end of var marker = new google.maps.Marker({
    } // end of for (var i = 0; i < results.features.length; i++)
} // end of window.eqfeed_callback = function (results)