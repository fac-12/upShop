/* eslint-disable */
var getLocation = document.getElementById('getLocation');
var postcode = document.getElementById('postcode');

var optionBoxes = document.getElementsByClassName('optionBox');
var optionBoxArray = Array.from(optionBoxes);

var radioBoxes = document.getElementsByClassName('radioBtn');
var radioBoxArray = Array.from(radioBoxes);

optionBoxArray.forEach(function(box){
  box.addEventListener("click", function(e){
    e.target.parentNode.previousSibling.checked = true;
  })
})

window.addEventListener("click", function(){
  radioBoxArray.forEach(function(radio){
    if(radio.checked === true) {
    radio.nextSibling.style.backgroundColor = "white";
    radio.nextSibling.style.border = "2px solid rgb(247, 208, 92)";
    }
    else {
    radio.nextSibling.style.backgroundColor = "rgb(247, 208, 92)";
    radio.nextSibling.style.border = "none";
    }
  });
});


getLocation.addEventListener('click', function() {
  getLocation.style.opacity = "0.5";
  function success(pos) {
  fetch('https://api.postcodes.io/postcodes?lon='+pos.coords.longitude+'&lat='+pos.coords.latitude)
         .then(response => response.json()
             )
            .then(data => postcode.value = data.result[0].postcode
          )
          .catch(error => console.log('error is', error))


  }
  function error(err) {
    alert("You don't have geolocation enabled, sorry! Try typing in your postcode instead.")
  }
var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
}
  navigator.geolocation.getCurrentPosition(success, error, options)
})
