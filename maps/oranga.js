let map;

function initMap() {
  const CENTER = {lat: -36.911961, lng: 174.800761}

  const MAPBOUNDS = {
    north: (CENTER.lat)*0.9995,
    south: (CENTER.lat)*1.0005,
    west: (CENTER.lng)*0.9999,
    east: (CENTER.lng)*1.0001,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center:CENTER,
    zoom: 15.5,
    disableDefaultUI: true,
    restriction: {
      latLngBounds: MAPBOUNDS,
      strictBounds: false,
    },
  });
  var opt = { minZoom: 15.5, maxZoom: 16 };
  map.setOptions(opt);
  var myCoordinates = [
    new google.maps.LatLng(-36.907089,174.805117),
    new google.maps.LatLng(-36.914466,174.805718),
    new google.maps.LatLng(-36.915135,174.796148),
    new google.maps.LatLng(-36.913797,174.796084),
    new google.maps.LatLng(-36.913557,174.796285),
    new google.maps.LatLng(-36.913256,174.796693),
    new google.maps.LatLng(-36.913016,174.796843),
    new google.maps.LatLng(-36.912733,174.796768),
    new google.maps.LatLng(-36.912536,174.796575),
    new google.maps.LatLng(-36.912407,174.796274),
    new google.maps.LatLng(-36.912296,174.795985),
    new google.maps.LatLng(-36.912184,174.795824),
    new google.maps.LatLng(-36.911721,174.795759),
    new google.maps.LatLng(-36.911223,174.795738),
    new google.maps.LatLng(-36.907089,174.805093),
    new google.maps.LatLng(-36.907090,174.805121)
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