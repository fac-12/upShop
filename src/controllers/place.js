const queries = require('./queries');

exports.get = (req, res) => {
  let placeResults; 
  let placeResultsId; 
  const placeName = req.params.place;

    if(!placeName){
          res.render('error', { layout: 'error' });
      }

  queries
    .getPlace(placeName)
    .then((placeDetails) => {
      if(placeDetails.length === 0){
          res.render('error', { layout: 'error' });
      } 
      else {
         placeResults = placeDetails[0];
         placeResultsId = placeDetails[0].id;
      }
    })
    .catch();

  queries
    .getValues(placeResultsId)
    .then((getValueResult) => {
            const values = getValueResult[0].standard;
            res.render('placeDetails', { placeResults, values, layout: 'navHome' })
          })
    .catch((err) => {
      res.render('error', { layout: 'error' });
          })
    }
