const queries = require('./queries');

exports.get = (req, res) => {
  const placeName = req.params.place;

    if(!placeName){
          res.render('error', { layout: 'error' });
      }
      
  queries
    .getPlace(placeName)
    .then((placeDetails) => {
      if(placeDetails.length === 0){
          res.render('error', { layout: 'error' });
      } else {
        const placeResults = placeDetails[0]
        const placeResultsId = placeDetails[0].id
        queries.getValues(placeResultsId)
          .then((getValueResult) => {
            const values = getValueResult[0].standard;
            res.render('placeDetails', { placeResults, values, layout: 'navHome' })
          })
          .catch((err) => {
            console.log(err);
          })
      }
    })

    .catch((err) => {
      console.log(err);
    })
};
