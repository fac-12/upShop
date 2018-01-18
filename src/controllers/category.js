//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {

  if(req.query.category === undefined) {
  const err = 'You need to choose a category first!';
  res.render('error', {
            err,
            layout: 'error',
          });
}

  else {
  const cat = req.query.category;
  const currentPC = (req.query.postcode).replace(" ", "").toString();

  fetch(`https://api.postcodes.io/postcodes/${currentPC}`)
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
        resultsArr = resultsArr;
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
};
