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
    category: req.query.category,
    values: req.query.value,
  };

  queries.addPlace(placeObj, hoursObj)
    .then(() => {
      queries.addCatConnections(placeObj)
        .then(() => {
          res.render('success', {
            placeObj, layout: 'navHome',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });

//   queries.addStandardConnections(placeObj)
//     .then(() => {
//       console.log('in add cat: ', req.query.values);
//       res.render('success', {
//         placeObj, layout: 'navHome',
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// queries.addPlace(placeObj, hoursObj)
// .then(() => {
//   queries.addCatConnections(placeObj)
//     .then(() => {
//       queries.addStandardConnections(placeObj){
//   res.render('success', {
//     placeObj, layout: 'navHome',
//   });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
};