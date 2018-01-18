/* eslint-disable */

var submitForm = document.getElementById('submitForm');
var form = document.getElementById('moreDetails');
var values = document.getElementsByName('value[]');

// function to prevent user submitting entry without selecting at least one values

form.addEventListener("submit", function (e) {
  var checked = [];
  values.forEach(a => {
    checked.push(a.checked)
  })

  if (!checked.includes(true)) {
    e.preventDefault();
   alert('Please select at least one value');
  }
});
