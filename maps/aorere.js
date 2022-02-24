let map;

function initMap() {
  const CENTER = {lat:-36.974308, lng:174.82669 }
  const MAPBOUNDS = {
    north: (CENTER.lat)*0.9995,
    south: (CENTER.lat)*1.0005,
    west: (CENTER.lng)*0.9999,
    east: (CENTER.lng)*1.0001,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center: CENTER,
    zoom: 15,
    disableDefaultUI: true,
    restriction: {
      latLngBounds: MAPBOUNDS,
      strictBounds: false,
    }
  });
  var opt = { minZoom: 15, maxZoom: 16 };
  map.setOptions(opt);
  var myCoordinates = [
    new google.maps.LatLng(-36.968545,174.822929),
    new google.maps.LatLng(-36.974014,174.837177),
    new google.maps.LatLng(-36.974648,174.836877),
    new google.maps.LatLng(-36.981814,174.829645),
    new google.maps.LatLng(-36.981810,174.829540),
    new google.maps.LatLng(-36.979873,174.827191),
    new google.maps.LatLng(-36.977524,174.823790),
    new google.maps.LatLng(-36.974971,174.819773),
    new google.maps.LatLng(-36.973196,174.817370),
    new google.maps.LatLng(-36.968554,174.822936)
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