/* eslint-disable */
var categoryBtn = document.getElementsByClassName('categoryBtn');
var categoryBtnArr = Array.from(categoryBtn);
var getLocation = document.getElementById('getLocation');
var postcode = document.getElementById('postcode');


getLocation.addEventListener('click', function() {
  function success(pos) {
  fetch('http://api.postcodes.io/postcodes?lon='+pos.coords.longitude+'&lat='+pos.coords.latitude)
         .then(response => response.json()
             )
            .then(data => postcode.value = data.result[0].postcode
          )
          .catch(error => console.log('error is', error))


  }
  function error(err) {
    console.log('error= ', err);
  }
var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
}
  navigator.geolocation.getCurrentPosition(success, error, options)
})
