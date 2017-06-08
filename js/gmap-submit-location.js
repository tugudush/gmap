// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;

function initMap() {
    
    var australia = {
        lat: -26.7734587,
        lng: 135.4272116
    };
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: australia,
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            map.setCenter(pos);
            
            jQuery('#location-lat').val(pos.lat);
            jQuery('#location-lng').val(pos.lng);

            var marker = new google.maps.Marker({
                map: map,
                draggable: true,                
                position: pos
            });

            console.log('marker position: ' + marker.position);
            
            google.maps.event.addListener(marker, 'dragend', function(marker) {
                var latLng = marker.latLng; 
                currentLatitude = latLng.lat();
                currentLongitude = latLng.lng();                
                console.log('new marker pos: '+marker.latLng);
                jQuery('#location-lat').val(currentLatitude);
                jQuery('#location-lng').val(currentLongitude);
             }); // end of google.maps.event.addListener(marker, 'dragend', function(marker)
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        }); // end of navigator.geolocation.getCurrentPosition(function (position)        
    } // end of if (navigator.geolocation)
    else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    if (browserHasGeolocation) {
        //alert('The Geolocation service failed!');
    }
    else {
        alert("Your browser doesn't support geolocation!");
    }
    
    jQuery('#location-lat').val(pos.lat);
    jQuery('#location-lng').val(pos.lng);
    
    map.zoom = 5;
    
    var marker = new google.maps.Marker({
        map: map,
        draggable: true,                
        position: pos
    });

    console.log('marker position: ' + marker.position);

    google.maps.event.addListener(marker, 'dragend', function(marker){
        var latLng = marker.latLng; 
        currentLatitude = latLng.lat();
        currentLongitude = latLng.lng();                
        console.log('new marker pos: '+marker.latLng);
        jQuery('#location-lat').val(currentLatitude);
        jQuery('#location-lng').val(currentLongitude);
     }); 
} // end of function handleLocationError(browserHasGeolocation, infoWindow, pos)