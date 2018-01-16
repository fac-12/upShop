/* eslint-disable */
var categoryBtn = document.getElementsByClassName('categoryBtn');
var categoryBtnArr = Array.from(categoryBtn);
var getLocation = document.getElementById('getLocation');
var postcode = document.getElementById('postcode');


categoryBtnArr.forEach(function(button){
  button.addEventListener('click', function(e){
    var catObj = {
    	Clothes: 1,
    	'Bars and Restaurants': 2,
    	Cafés: 3,
    	Groceries: 4,
    	Entertainment: 5,
    	Other: 6
    }
    window.location.href='/search/'+ catObj[e.target.textContent];
 })
});

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
