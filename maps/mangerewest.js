let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center: {lat: -36.995463,lng: 174.899743 },
    zoom: 12,
  });
  var myCoordinates = [
    new google.maps.LatLng(-36.962300,174.799733),
    new google.maps.LatLng(-36.963534,174.799647),
    new google.maps.LatLng(-36.964769,174.798788),
    new google.maps.LatLng(-36.966449,174.796514),
    new google.maps.LatLng(-36.968712,174.793124),
    new google.maps.LatLng(-36.971283,174.790248),
    new google.maps.LatLng(-36.973101,174.788617),
    new google.maps.LatLng(-36.972209,174.786686),
    new google.maps.LatLng(-36.969775,174.785785),
    new google.maps.LatLng(-36.967683,174.785356),
    new google.maps.LatLng(-36.966003,174.785313),
    new google.maps.LatLng(-36.964254,174.785056),
    new google.maps.LatLng(-36.962574,174.784712),
    new google.maps.LatLng(-36.960071,174.783897),
    new google.maps.LatLng(-36.958631,174.783639),
    new google.maps.LatLng(-36.956470,174.784626),
    new google.maps.LatLng(-36.955098,174.785227),
    new google.maps.LatLng(-36.952080,174.786515),
    new google.maps.LatLng(-36.951257,174.786987),
    new google.maps.LatLng(-36.950434,174.788360),
    new google.maps.LatLng(-36.949474,174.790162),
    new google.maps.LatLng(-36.948719,174.789991),
    new google.maps.LatLng(-36.948308,174.791192),
    new google.maps.LatLng(-36.948376,174.792308),
    new google.maps.LatLng(-36.948685,174.793167),
    new google.maps.LatLng(-36.952561,174.794497),
    new google.maps.LatLng(-36.953727,174.795012),
    new google.maps.LatLng(-36.958390,174.797415),
    new google.maps.LatLng(-36.960277,174.798402),
    new google.maps.LatLng(-36.962163,174.799561),
    new google.maps.LatLng(-36.962231,174.799647),
    new google.maps.LatLng(-36.962303,174.799724),
    new google.maps.LatLng(-36.962305,174.799727)
    ];
    var polyOptions = {
    path: myCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1,
    strokeWeight: 3
    }
    var it = new google.maps.Polyline(polyOptions);
    it.setMap(map);

    
}