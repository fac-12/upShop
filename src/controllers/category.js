//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {

  const cat = req.query.category;
  const currentPC = (req.query.postcode).replace(" ", "").toString();

  fetch(`http://api.postcodes.io/postcodes/${currentPC}`)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = 'This postcode does not exist';
        throw new Error(errorMessage)
      } else {
        return response.json();
      }
    })
    .then((data) => {
      queries.getPlacesByCat(cat)
      .then((resultsArr) => {
        var currentLL = [data.result.latitude, data.result.longitude];
        console.log("currentLL", currentLL);
        console.log("resultsArr", resultsArr);
      res.render('listView', {
          resultsArr, currentLL, layout: 'list', helpers: { json: function (context) { return JSON.stringify(context); } }
        });
      });
    })
    .catch(err => {
      res.render('error', { err,
        layout: 'error',
    })
  });
};
