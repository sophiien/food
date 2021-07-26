function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(1.29027, 103.851959),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapOptions
  );
}
var mapOptions = {
  center: new google.maps.LatLng(1.29027, 103.851959),
  zoom: 12,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

google.maps.event.addDomListener(window, "load", initialize);

//create directions service object to use route method
let directionsService = new google.maps.DirectionService();

//create directionrenderer obj which used to display
let directionsDisplay = new google.maps.DirectionRenderer();

//bind the directionsRenderer to the map
directionsDisplay.setMap(map);

function calcRoute() {
  //create request
  let request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.Travelmode.WALKING,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
  };

  //pass request to route method
  directionsService.route(request, (result, status) => {
    if (status == google.maps.DirectionStatus.OK) {
      //get distance and time
      const output = document.querySelector("#output");
      output.innerHTML =
        "<div class='alert-info'> From: " +
        document.getElementById("from").value +
        ".<br />To: " +
        document.getElementById("to").value +
        ".<br /> Walking distance: " +
        results.routes[0].legs[0].distance.text +
        ".<br /> Duration: " +
        result.routes[0].legs[0].duration.text +
        ". </div>";

      //display routes
      directionsDisplay.setDirections(result);
    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: [] });

      //center map
      map.setCenter({ lat: 1.29027, lng: 103.851959 });

      //show error message if distnace too far
      output.innerHTML =
        "<div class='alert-danger'>Could not retrieve data</div>";
    }
  });
}

let options = {
  types: ["(cities)"],
};

let input1 = document.getElementById("from");
let autocomplete1 = new google.maps.places.Autocomplete(input1, options);

let input2 = document.getElementById("to");
let autocomplete2 = new google.maps.places.Autocomplete(input2, options);
