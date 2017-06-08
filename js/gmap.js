function initMap() {
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
        //center: new google.maps.LatLng(-25.363, 131.044),
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
} // end of function initMap()