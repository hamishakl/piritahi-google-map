let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: 'fde6c3f6f5a3dea0',
    center: {lat: -36.995463,lng: 174.899743 },
    zoom: 12,
  });

  var myCoordinates = [
    new google.maps.LatLng(-36.901318,174.716507),
    new google.maps.LatLng(-36.901541,174.715927),
    new google.maps.LatLng(-36.901301,174.715541),
    new google.maps.LatLng(-36.900426,174.715241),
    new google.maps.LatLng(-36.899980,174.712966),
    new google.maps.LatLng(-36.900357,174.712151),
    new google.maps.LatLng(-36.900374,174.711593),
    new google.maps.LatLng(-36.900374,174.711228),
    new google.maps.LatLng(-36.899637,174.711421),
    new google.maps.LatLng(-36.899499,174.711421),
    new google.maps.LatLng(-36.898590,174.711893),
    new google.maps.LatLng(-36.898453,174.711893),
    new google.maps.LatLng(-36.898916,174.709576),
    new google.maps.LatLng(-36.899379,174.708589),
    new google.maps.LatLng(-36.899259,174.707408),
    new google.maps.LatLng(-36.899070,174.707301),
    new google.maps.LatLng(-36.898384,174.707988),
    new google.maps.LatLng(-36.897938,174.707966),
    new google.maps.LatLng(-36.897509,174.708653),
    new google.maps.LatLng(-36.897166,174.708717),
    new google.maps.LatLng(-36.896994,174.708374),
    new google.maps.LatLng(-36.896942,174.708052),
    new google.maps.LatLng(-36.892086,174.713030),
    new google.maps.LatLng(-36.894248,174.715262),
    new google.maps.LatLng(-36.894694,174.716335),
    new google.maps.LatLng(-36.895398,174.720004),
    new google.maps.LatLng(-36.894849,174.722472),
    new google.maps.LatLng(-36.894797,174.722772),
    new google.maps.LatLng(-36.896290,174.723201),
    new google.maps.LatLng(-36.897011,174.719940),
    new google.maps.LatLng(-36.897646,174.718438),
    new google.maps.LatLng(-36.898453,174.717107),
    new google.maps.LatLng(-36.899002,174.717601),
    new google.maps.LatLng(-36.899087,174.717687),
    new google.maps.LatLng(-36.899860,174.716957),
    new google.maps.LatLng(-36.900186,174.716571),
    new google.maps.LatLng(-36.901301,174.716592),
    new google.maps.LatLng(-36.901299,174.716516)
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