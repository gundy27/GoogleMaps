function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 46.619,
            lng: -33.1366
        }
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

var locations = [
    { lat: 40.785091, lng: -72.968285 },
    { lat: 40.285091, lng: -73.368285 },
    { lat: 40.685091, lng: -73.768285 },
    { lat: 40.185091, lng: -73.068285 },
    { lat: 40.085091, lng: -73.668285 }
]

