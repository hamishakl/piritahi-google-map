let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center: {lat: -36.995463,lng: 174.899743 },
    zoom: 12,
  });

  var myCoordinates = [
    new google.maps.LatLng(-37.039597,174.915021),
    new google.maps.LatLng(-37.020411,174.909528),
    new google.maps.LatLng(-37.016026,174.921544),
    new google.maps.LatLng(-37.028086,174.925664),
    new google.maps.LatLng(-37.036583,174.928410),
    new google.maps.LatLng(-37.039597,174.916051)
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