function iniciarMap() {
  var coord = { lat: 13.692412487305077, lng: -89.23905184748824 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}
