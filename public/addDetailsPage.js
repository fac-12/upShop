/* eslint-disable */

var submitForm = document.getElementById('submitForm');
var form = document.getElementById('moreDetails');
var values = document.getElementsByName('value[]');

// function to prevent user submitting entry without selecting at least one values

form.addEventListener("click", function () {
  var checked = [];
  values.forEach(a => {
    isChecked.push(a.checked);
  })
 if (isChecked.every())
})
