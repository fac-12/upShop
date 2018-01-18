/* eslint-disable */
var getLocation = document.getElementById('getLocation');
var postcode = document.getElementById('postcode');
var optionBox1 = document.getElementById('optionBox1');
var optionBox2 = document.getElementById('optionBox2');
var optionBox3 = document.getElementById('optionBox3');
var optionBox4 = document.getElementById('optionBox4');
var optionBox5 = document.getElementById('optionBox5');
var optionBox6 = document.getElementById('optionBox6');


var radio1 = document.getElementById('radio1');
var radio2 = document.getElementById('radio2');
var radio3 = document.getElementById('radio3');
var radio4 = document.getElementById('radio4');
var radio5 = document.getElementById('radio5');
var radio6 = document.getElementById('radio6');


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

<<<<<<< HEAD

optionBox1.addEventListener('click', function(){
    if(radio1.checked){
      radio1.checked = false;
      optionBox1.style.background = "yellow";
    } else {
      radio1.checked = true;
      optionBox1.style.background = "red";
    }

    alert(radio1.checked);
});
=======
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});
>>>>>>> master
