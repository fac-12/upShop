const queries = require('./queries');

exports.get = (req, res) => {
  const placeName = req.params.place;

  queries
    .getPlace(placeName)
    .then(placeDetails => {
      console.log(placeDetails);
      let placeResults = placeDetails[0]
      let values = placeDetails;
      res.render('placeDetails', { placeResults, values, layout: 'navHomeBack'})
    })
    .catch((err) => {
      console.log(err);
    })
};
