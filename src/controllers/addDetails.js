const queries = require('./queries');


exports.get = (req, res) => {
  const hoursObj =
  {
    monday: [req.query.mondayo, req.query.mondayc],
    tuesday: [req.query.tueso, req.query.tuesc],
    wednesday: [req.query.wedso, req.query.wedsc],
    thursday: [req.query.thurso, req.query.thursc],
    friday: [req.query.frio, req.query.fric],
    saturday: [req.query.sato, req.query.satc],
    sunday: [req.query.suno, req.query.sunc],
  };

  const placeObj = {
    name: decodeURI(req.query.name),
    address: decodeURI(req.query.address),
    postcode: decodeURI(req.query.postcode),
    lat_long: req.query.lat_long,
    description: req.query.description,
    website: req.query.website,
  };


  queries.addPlace(placeObj, hoursObj)
    .then(() => {
      res.render('addMoreDetails', {
        placeObj, hoursObj, layout: 'navHome',
      });
    })
    .catch((err) => {
      console.log(err);
    });
//   console.log('hours: ', hoursObj);

//   res.render('success', {
//     layout: 'navHome',
//   });
};
