function initialize() {
    var MY_MAPTYPE_ID = 'custom_style';
    //var MY_MAPTYPE_ID = google.maps.MapTypeId.ROADMAP;
    var featureOpts = [{
      stylers: [
        //     { hue: '#890000' },
        {
          visibility: 'on'
        }
      ]
    }, {
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: "administrative.country",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: 'road',
      stylers: [{
        color: '#00FF00'
      }, {
        visibility: 'off'
      }]
    }];
  
  
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(0, -180),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.TERRAIN, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };
  
    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
    var styledMapOptions = {
      name: 'Custom Style'
    };
  
    var flightPlanCoordinates = [
      new google.maps.LatLng(40.7127, -74.0059),
      new google.maps.LatLng(-27.46758, 153.027892)
    ];
    var flightPlanCoordinates1 = [
      new google.maps.LatLng(50.7127, -74.0059),
      new google.maps.LatLng(-27.46758, 153.027892)
    ];
  
    var flightArray = [];
    flightArray.push(flightPlanCoordinates);
    flightArray.push(flightPlanCoordinates1);
  
    var colorArray = [];
    colorArray.push('#FF0000');
    colorArray.push('#00FF00');
  
  
    // Code for displaying the polylines in the browser
    for (var i = 0; i < flightArray.length; i++) {
  
      var flightPath = new google.maps.Polyline({
        path: flightArray[i],
        geodesic: true,
        strokeColor: colorArray[i],
        strokeOpacity: 1.0,
        strokeWeight: 1
      });
      var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
      map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
      flightPath.setMap(map);
    }
    var citiesJSON = {
      geonames: [{
        lat: 40.7127,
        lng: -74.0059,
        name: "New York"
      }, {
        lat: -27.46758,
        lng: 153.027892,
        name: "Brisbane"
      }, {
        lat: 50.7127,
        lng: -74.0059,
        name: "Quebec"
      }]
    };
    var mapLabels = [];
    for (var i = 0; i < citiesJSON.geonames.length; i++) {
      var myOptions = {
        content: citiesJSON.geonames[i].name,
        boxStyle: {
          border: "none",
          textAlign: "center",
          fontSize: "8pt",
          width: "100px"
        },
        disableAutoPan: true,
        pixelOffset: new google.maps.Size(-50, 0),
        position: new google.maps.LatLng(citiesJSON.geonames[i].lat,
          citiesJSON.geonames[i].lng),
        closeBoxURL: "",
        isHidden: false,
        pane: "mapPane",
        enableEventPropagation: true
      };
  
      var ibLabel = new InfoBox(myOptions);
      ibLabel.open(map);
      mapLabels.push(ibLabel);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(citiesJSON.geonames[i].lat,
          citiesJSON.geonames[i].lng),
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 2
        }
      });
    }
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);