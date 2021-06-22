let map, popup, Popup;

const mapData = {
     northcoteData: {
         northcoteCoordinates: { lat: -36.79864, lng: 174.74447},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     roskillSouthData: {
         roskillSouthCoordinates: { lat: -36.91524,
        lng: 174.73542,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     owairakaData: {
         owairakaCoordinates: { lat: -36.89212,
        lng: 174.72037,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     waikowhaiData: {
         waikowhaiCoordinates: { lat: -36.92616,
        lng: 174.74048,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     orangaData: {
         orangaCoordinates: { lat: -36.91142,
        lng: 174.80049,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     catalinaBayData: {
         catalinaBayCoordinates: { lat: -36.78879,
        lng: 174.67151,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     mangereWestData: {
         mangereWestCoordinates: { lat: -36.96161,
        lng: 174.79355,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
     aorereData: {
         aorereCoordinates: { lat: -36.97418,
        lng: 174.82487,},
         contentString: "<h1>Hello Northcote!</h1>"
      },
    
 }

function initialize() {
  var MY_MAPTYPE_ID = "custom_style";
  //var MY_MAPTYPE_ID = google.maps.MapTypeId.ROADMAP;
  var featureOpts = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#c7eef4",
        },
        {
          visibility: "simplified",
        },
      ],
    },
  ];

  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(0, -180),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.TERRAIN, MY_MAPTYPE_ID],
    },
    mapTypeId: MY_MAPTYPE_ID,
    zoom: 12,
    center: { lat: -36.84, lng: 174.76 },
    disableDefaultUI: true,
  };

  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );

  var styledMapOptions = {
    name: "Custom Style",
  };

  var flightPlanCoordinates = [];
  var flightPlanCoordinates1 = [];

  var flightArray = [];
  flightArray.push(flightPlanCoordinates);
  flightArray.push(flightPlanCoordinates1);

  var colorArray = [];
  colorArray.push("#FF0000");
  colorArray.push("#00FF00");

  // Code for displaying the polylines in the browser
  for (var i = 0; i < flightArray.length; i++) {
    var flightPath = new google.maps.Polyline({
      path: flightArray[i],
      geodesic: true,
      strokeColor: colorArray[i],
      strokeOpacity: 1.0,
      strokeWeight: 1,
    });
    var customMapType = new google.maps.StyledMapType(
      featureOpts,
      styledMapOptions
    );
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    flightPath.setMap(map);
  }
  var citiesJSON = {
    geonames: [
      {
        lat: -36.91524,
        lng: 174.73542,
        name: "Roskill South",
      },
      {
        lat: -36.79864,
        lng: 174.74447,
        name: "Northcote",
      },
      {
        lat: -36.89212,
        lng: 174.72037,
        name: "Ōwairaka",
      },
      {
        lat: -36.92616,
        lng: 174.74048,
        name: "Waikōwhai",
      },
      {
        lat: -36.91142,
        lng: 174.80049,
        name: "Oranga",
      },
      {
        lat: -36.78879,
        lng: 174.67151,
        name: "Catalina Bay",
      },
      {
        lat: -36.96161,
        lng: 174.79355,
        name: "Mangere West",
      },
      {
        lat: -36.97418,
        lng: 174.82487,
        name: "Aorere",
      },
    ],
  };
  var mapLabels = [];
  for (var i = 0; i < citiesJSON.geonames.length; i++) {
    var myOptions = {
      content: citiesJSON.geonames[i].name,
      boxStyle: {
        border: "none",
        textAlign: "center",
        fontSize: "12pt",
        width: "100px",
      },
      disableAutoPan: true,
      pixelOffset: new google.maps.Size(-50, 0),
      position: new google.maps.LatLng(
        citiesJSON.geonames[i].lat,
        citiesJSON.geonames[i].lng
      ),
      closeBoxURL: "",
      isHidden: false,
      pane: "mapPane",
      enableEventPropagation: true,
    };

    var ibLabel = new InfoBox(myOptions);
    ibLabel.open(map);
    mapLabels.push(ibLabel);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        citiesJSON.geonames[i].lat,
        citiesJSON.geonames[i].lng
      ),
      map: map,
      animation: google.maps.Animation.DROP,

      // icon: {
      //   path: google.maps.SymbolPath.CIRCLE,
      //   scale: 3
      // }
    });
  }

  

  const northcoteWindow = new google.maps.InfoWindow({
    content: mapData.northcoteData.contentString,
    maxWidth: 200,
  });
  const northcote = new google.maps.Marker({
    position: mapData.northcoteData.northcoteCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  northcote.addListener("click", () => {
    northcoteWindow.open({
      anchor: northcote,
      map,
      shouldFocus: false,
    });
  });

  const roskillSouthWindow = new google.maps.InfoWindow({
    content: mapData.roskillSouthData.contentString,
    maxWidth: 200,
  });
  const roskillSouth = new google.maps.Marker({
    position: mapData.roskillSouthData.roskillSouthCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  roskillSouth.addListener("click", () => {
    roskillSouthWindow.open({
      anchor: roskillSouth,
      map,
      shouldFocus: false,
    });
  });

  const owairakaWindow = new google.maps.InfoWindow({
    content: mapData.owairakaData.contentString,
    maxWidth: 200,
  });
  const owairaka = new google.maps.Marker({
    position: mapData.owairakaData.owairakaCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  owairaka.addListener("click", () => {
    owairakaWindow.open({
      anchor: owairaka,
      map,
      shouldFocus: false,
    });
  });

  const waikowhaiWindow = new google.maps.InfoWindow({
    content: mapData.waikowhaiData.contentString,
    maxWidth: 200,
  });
  const waikowhai = new google.maps.Marker({
    position: mapData.waikowhaiData.waikowhaiCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  waikowhai.addListener("click", () => {
    waikowhaiWindow.open({
      anchor: waikowhai,
      map,
      shouldFocus: false,
    });
  });

  const orangaWindow = new google.maps.InfoWindow({
    content: mapData.orangaData.contentString,
    maxWidth: 200,
  });
  const oranga = new google.maps.Marker({
    position: mapData.orangaData.orangaCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  oranga.addListener("click", () => {
    orangaWindow.open({
      anchor: oranga,
      map,
      shouldFocus: false,
    });
  });

  const catalinaBayWindow = new google.maps.InfoWindow({
    content: mapData.catalinaBayData.contentString,
    maxWidth: 200,
  });
  const catalinaBay = new google.maps.Marker({
    position: mapData.catalinaBayData.catalinaBayCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  catalinaBay.addListener("click", () => {
    catalinaBayWindow.open({
      anchor: catalinaBay,
      map,
      shouldFocus: false,
    });
  });

  const mangereWestWindow = new google.maps.InfoWindow({
    content: mapData.mangereWestData.contentString,
    maxWidth: 200,
  });
  const mangereWest = new google.maps.Marker({
    position: mapData.mangereWestData.mangereWestCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  mangereWest.addListener("click", () => {
    mangereWestWindow.open({
      anchor: mangereWest,
      map,
      shouldFocus: false,
    });
  });

  const aorereWindow = new google.maps.InfoWindow({
    content: mapData.aorereData.contentString,
    maxWidth: 200,
  });
  const aorere = new google.maps.Marker({
    position: mapData.aorereData.aorereCoordinates,
    map,
    animation: google.maps.Animation.DROP
  });
  aorere.addListener("click", () => {
    aorereWindow.open({
      anchor: aorere,
      map,
      shouldFocus: false,
    });
  });


}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
    disableDefaultUI: true,
  });
}

google.maps.event.addDomListener(window, "load", initialize);
