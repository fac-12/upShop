const queries = require('./queries');
const fetch = require('isomorphic-fetch');
// require('es6-promise').polyfill();

exports.get = (req, res) => {

  const placeObj = {
    name: req.query.name,
    address: req.query.address,
    postcode: req.query.postcode,
    lat_long: [],
  };

  const pc = encodeURI(req.query.postcode);

fetch(`http://api.postcodes.io/postcodes/${pc}`)
    .then(response => response.json()
        )
          .then(response =>
          placeObj.lat_long.push.apply(placeObj.lat_long, [response.latitude, response.longitude])
          console.log(placeObj)
        )
// above not working yet

  queries.checkPlace(placeObj)
    .then((x) => {
      if (x[0].case == 0) {
        res.render('addMoreDetails', {
          placeObj, layout: 'navHome',
        });
      } else {
        res.render('businessExists', {
          layout: 'navHomeBack',
        });
      }
    })
    .catch(() => {
      res.render('error', {
        layout: 'error',
      });
    });
};
