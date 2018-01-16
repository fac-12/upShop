const queries = require('./queries');
const fetch = require('isomorphic-fetch');

exports.get = (req, res) => {
  
  const placeObj = {
    name: req.query.name,
    address: req.query.address,
    postcode: req.query.postcode,
    lat_long: '',
  };

  const pc = encodeURI(req.query.postcode);

  //Calls postcodes.io API to convert postcode into lat long
  fetch(`http://api.postcodes.io/postcodes/${pc}`)
    .then(response => response.json(),
    )
    .then(data =>
    placeObj.lat_long = [data.result.latitude, data.result.longitude])

    queries.checkPlace(placeObj)
    .then((x) => {
      if (x[0].case == 0) {
        console.log('check: ', placeObj);
        const nameEnc = encodeURI(placeObj.name);
        const addressEnc = encodeURI(placeObj.address);
        
        const encodedObj = {
          name: nameEnc,
          address: addressEnc,
          postcode: pc,
          lat_long: placeObj.lat_long,
        }

        res.render('addMoreDetails', {
          encodedObj, layout: 'navHome',
        });
      } else {
        res.render('businessExists', {
          layout: 'navHome',
        });
      }
    })
    .catch(() => {
      res.render('error', {
        layout: 'error',
      });
    });
// Checks if place exists in database

};
