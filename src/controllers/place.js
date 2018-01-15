const queries = require('./queries');

exports.get = (req, res) => {
  const placeName = req.params.place;

  queries
    .getPlace(placeName)
    .then(placeDetails => {
      let placeResults = placeDetails[0]
      let values = placeDetails;
      res.render('placeDetails', { placeResults, values, layout: 'navHome'})
    })
    .catch((err) => {
      console.log(err);
    })
};
