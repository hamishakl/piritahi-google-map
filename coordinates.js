var myCoordinates = [
    new google.maps.LatLng(-36.920604,174.736361),
    new google.maps.LatLng(-36.922834,174.734323),
    new google.maps.LatLng(-36.925494,174.735053),
    new google.maps.LatLng(-36.926248,174.736191),
    new google.maps.LatLng(-36.928753,174.736126),
    new google.maps.LatLng(-36.929542,174.735247),
    new google.maps.LatLng(-36.930262,174.735504),
    new google.maps.LatLng(-36.930279,174.736298),
    new google.maps.LatLng(-36.930451,174.737028),
    new google.maps.LatLng(-36.930657,174.737779),
    new google.maps.LatLng(-36.930605,174.738229),
    new google.maps.LatLng(-36.930297,174.739259),
    new google.maps.LatLng(-36.930194,174.740246),
    new google.maps.LatLng(-36.930194,174.740783),
    new google.maps.LatLng(-36.930485,174.741598),
    new google.maps.LatLng(-36.930434,174.742220),
    new google.maps.LatLng(-36.930262,174.743057),
    new google.maps.LatLng(-36.929953,174.744988),
    new google.maps.LatLng(-36.929851,174.745439),
    new google.maps.LatLng(-36.929799,174.745782),
    new google.maps.LatLng(-36.929439,174.746404),
    new google.maps.LatLng(-36.928993,174.746941),
    new google.maps.LatLng(-36.928787,174.747198),
    new google.maps.LatLng(-36.928582,174.747670),
    new google.maps.LatLng(-36.926935,174.749902),
    new google.maps.LatLng(-36.926369,174.750567),
    new google.maps.LatLng(-36.923298,174.741533),
    new google.maps.LatLng(-36.922183,174.738272),
    new google.maps.LatLng(-36.920656,174.736383)
    ];
    var polyOptions = {
    path: myCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1,
    strokeWeight: 3
    }
    var it = new google.maps.Polyline(polyOptions);
    it.setMap(map);
    