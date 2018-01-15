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
    name: req.query.name,
    address: req.query.address,
    postcode: req.query.postcode,
    lat_long: '',
  };


  // need to add info to addPlace query

  queries.addPlace(placeObj, hoursObj)
    .then((x) => {
      res.render('addMoreDetails', {
        placeObj, hoursObj, layout: 'navHome',
      });
      console.log(x)
    }) 
    .catch((err) => {
      console.log(err);
    });
//   console.log('hours: ', hoursObj);

//   res.render('success', {
//     layout: 'navHome',
//   });
};
