function initialize2(){
    
var LatLng = {lat: -20.51616817, lng: -43.6986738};
          var mapProp = {
          center: LatLng,
          zoom:14,
          mapTypeId:google.maps.MapTypeId.ROADMAP,
          mapTypeControl:false,
          streetViewControl:false
          };
    var map = new google.maps.Map(document.getElementById("googleMap2"),mapProp);
    var marker = new google.maps.Marker({
    position: LatLng,
    map: map
  });
    var contentString = "Seu local atual";

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    
        var input = document.getElementById('pac-input2');
    var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var markers = [];
    searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }
        markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
        var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
        
        var marke = new google.maps.Marker({
    position: place.geometry.location,
    map: map,
    icon: icon
  });

  var infowindow1 = new google.maps.InfoWindow();
        
  marke.addListener('click', function() {
      var service1 = new google.maps.places.PlacesService(map);
      service1.getDetails({
    placeId: place.place_id
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        if(place.formatted_phone_number){ 
          infowindow1.setContent('<p><b>'+place.name+"</b><br>"+'</p>' + place.vicinity + "<br>" + place.formatted_phone_number);
        }else{
          infowindow1.setContent('<p><b>'+place.name+"</b><br>"+'</p>' + place.vicinity);
        }
    }
  });
    infowindow1.open(map, marke);
  });

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
    
    
var infowindo;
  infowindo = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);   
    
  service.nearbySearch({
    location: LatLng,
    radius: 5000,
    types: ['restaurant'],  
  }, callback);
      
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);      
    }
  }
}

function createMarker(place) {  
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
  var placeLoc = place.geometry.location;
  var mark = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: image
  });
    
    google.maps.event.addListener(mark, 'click', function() {
      service.getDetails({
    placeId: place.place_id
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        if(place.formatted_phone_number){ 
          infowindo.setContent('<p><b>'+place.name+"</b><br>"+'</p>' + place.vicinity + "<br>" + place.formatted_phone_number);
        }else{
          infowindo.setContent('<p><b>'+place.name+"</b><br>"+'</p>' + place.vicinity);
        }
    }
  });
    infowindo.open(map, this);
  });
    
} 
    
}
google.maps.event.addDomListener(window, 'load', initialize2);