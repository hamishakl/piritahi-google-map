let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center: {lat: -36.995463,lng: 174.899743 },
    zoom: 12,
  });

  var myCoordinates = [
    new google.maps.LatLng(-36.909764,174.734469),
    new google.maps.LatLng(-36.910468,174.736679),
    new google.maps.LatLng(-36.910648,174.737591),
    new google.maps.LatLng(-36.911523,174.739361),
    new google.maps.LatLng(-36.913461,174.738833),
    new google.maps.LatLng(-36.915511,174.738188),
    new google.maps.LatLng(-36.917397,174.737555),
    new google.maps.LatLng(-36.918804,174.737104),
    new google.maps.LatLng(-36.919224,174.736954),
    new google.maps.LatLng(-36.920382,174.736246),
    new google.maps.LatLng(-36.920468,174.736160),
    new google.maps.LatLng(-36.918391,174.733603),
    new google.maps.LatLng(-36.917061,174.732005),
    new google.maps.LatLng(-36.914896,174.730031),
    new google.maps.LatLng(-36.909740,174.734451)
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