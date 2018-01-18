var getLocation = document.getElementById('getLocation');
var postcode = document.getElementById('postcode');

getLocation.addEventListener('click', function() {
  function success(pos) {
  fetch('https://api.postcodes.io/postcodes?lon='+pos.coords.longitude+'&lat='+pos.coords.latitude)
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

window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});