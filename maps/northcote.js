let map;

function initMap() {
  const CENTER = {lat: -36.798777, lng: 174.744764 }

  const MAPBOUNDS = {
    north: (CENTER.lat)*0.9995,
    south: (CENTER.lat)*1.0005,
    west: (CENTER.lng)*0.9999,
    east: (CENTER.lng)*1.0001,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center:CENTER,
    zoom: 15,
    disableDefaultUI: true,
    restriction: {
      latLngBounds: MAPBOUNDS,
      strictBounds: false,
    },
  });
  var opt = { minZoom: 15, maxZoom: 16 };
  map.setOptions(opt);
  var myCoordinates = [
    new google.maps.LatLng(-36.794010,174.745464),
    new google.maps.LatLng(-36.794904,174.745356),
    new google.maps.LatLng(-36.795076,174.746880),
    new google.maps.LatLng(-36.795261,174.747245),
    new google.maps.LatLng(-36.795312,174.747320),
    new google.maps.LatLng(-36.795029,174.747813),
    new google.maps.LatLng(-36.795012,174.747867),
    new google.maps.LatLng(-36.795751,174.748811),
    new google.maps.LatLng(-36.795811,174.748800),
    new google.maps.LatLng(-36.796086,174.748360),
    new google.maps.LatLng(-36.798534,174.751257),
    new google.maps.LatLng(-36.798697,174.751021),
    new google.maps.LatLng(-36.798835,174.750667),
    new google.maps.LatLng(-36.799135,174.750002),
    new google.maps.LatLng(-36.799857,174.749487),
    new google.maps.LatLng(-36.801635,174.747266),
    new google.maps.LatLng(-36.803053,174.745431),
    new google.maps.LatLng(-36.801175,174.737184),
    new google.maps.LatLng(-36.801077,174.736505),
    new google.maps.LatLng(-36.798560,174.739573),
    new google.maps.LatLng(-36.795594,174.743395),
    new google.maps.LatLng(-36.794020,174.745457)
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