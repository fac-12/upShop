const queries = require('./queries');

exports.get = (req, res) => {

    if(req.query.length === undefined) {
  const err = 'You need to select a place first!';
  res.render('error', {
            err,
            layout: 'error',
          });
}

  const placeName = req.params.place;

  queries
    .getPlace(placeName)
    .then((placeDetails) => {
      console.log("placeDetails", placeDetails)
      const placeResults = placeDetails[0]
      const placeResultsId = placeDetails[0].id
      const placeHours = JSON.parse(placeResults.hours)
      queries.getValues(placeResultsId)
        .then((getValueResult) => {
          const values = getValueResult[0].standard;
          res.render('placeDetails', { placeResults, placeHours, values, layout: 'navHome' })
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
};
