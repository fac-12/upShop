//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {
  const cat = req.query.category;
  const currentPC = (req.query.postcode).replace(" ", "").toString();

<<<<<<< HEAD
  fetch(`http://api.postcodes.io/postcodes/${currentPC}`)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = 'This postcode does not exist';
        throw new Error(errorMessage)
      } else {
        return response.json();
      }
queries
    .getPlacesByCat(cat)
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      queries.catResults(cat)
      .then((resultsArr) => {
        var currentLL = [data.result.latitude, data.result.longitude];
        resultsArr.push(currentLL);
      res.render('listView', {
          resultsArr, layout: 'list', helpers: { json: function (context) { return JSON.stringify(context); } }
        });
      });
    })
    .catch(err => {
      res.render('error', { err,
        layout: 'error',
    })
  });
};

