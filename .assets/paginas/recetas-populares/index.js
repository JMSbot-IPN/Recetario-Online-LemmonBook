function initMap() {
  const restaurante = { lat: 19.63294127276886, lng: -99.11807079537921 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: restaurante,
  });
  const marker = new google.maps.Marker({
    position: restaurante,
    map: map,
  });
}