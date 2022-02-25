let map;

function initMap() {
  const CENTER = {lat: -36.789304, lng: 174.672147 }

  const MAPBOUNDS = {
    north: (CENTER.lat)*0.9995,
    south: (CENTER.lat)*1.0005,
    west: (CENTER.lng)*0.9998,
    east: (CENTER.lng)*1.0005,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center:CENTER,
    zoom: 17,
    disableDefaultUI: true,
    restriction: {
      latLngBounds: MAPBOUNDS,
      strictBounds: false,
    },
  });
  var opt = { minZoom: 16, maxZoom: 18 };
  map.setOptions(opt);
  var myCoordinates = [
    new google.maps.LatLng(-36.788191,174.671428),
    new google.maps.LatLng(-36.788260,174.671627),
    new google.maps.LatLng(-36.788264,174.671697),
    new google.maps.LatLng(-36.788286,174.671724),
    new google.maps.LatLng(-36.788355,174.671858),
    new google.maps.LatLng(-36.788458,174.672115),
    new google.maps.LatLng(-36.788595,174.672238),
    new google.maps.LatLng(-36.788823,174.672389),
    new google.maps.LatLng(-36.789136,174.673150),
    new google.maps.LatLng(-36.789695,174.673408),
    new google.maps.LatLng(-36.790155,174.673065),
    new google.maps.LatLng(-36.790120,174.672866),
    new google.maps.LatLng(-36.790026,174.672743),
    new google.maps.LatLng(-36.789983,174.672753),
    new google.maps.LatLng(-36.789815,174.672158),
    new google.maps.LatLng(-36.789794,174.672035),
    new google.maps.LatLng(-36.789764,174.671766),
    new google.maps.LatLng(-36.789738,174.671445),
    new google.maps.LatLng(-36.789712,174.671171),
    new google.maps.LatLng(-36.789656,174.670913),
    new google.maps.LatLng(-36.789386,174.671021),
    new google.maps.LatLng(-36.789308,174.670935),
    new google.maps.LatLng(-36.789257,174.670763),
    new google.maps.LatLng(-36.788187,174.671407),
    new google.maps.LatLng(-36.788193,174.671423)
    ];
    var polyOptions = {
    path: myCoordinates,
    strokeColor: "#D66642",
    strokeOpacity: 1,
    strokeWeight: 3
    }
    var it = new google.maps.Polyline(polyOptions);
    it.setMap(map);
    

}