const queries = require('./queries');

exports.get = (req, res) => {
  const placeName = req.params.place;

  queries
    .getPlace(placeName)
    .then(placeDetails => {
      let resName = placeDetails[0].name;
      let resSite = placeDetails[0].website;
      let resDesc = placeDetails[0].description;
      let resAddress = placeDetails[0].address;
      let resTimes = 'time';
      let resValues = 'somevalues';
      res.render('placeDetails', {resName, resSite, resDesc, resAddress, resTimes, resValues})
    })
    .catch((err) => {
      console.log(err);
    })
};
