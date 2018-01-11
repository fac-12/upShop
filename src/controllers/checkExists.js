const queries = require('./queries');

exports.get = (req, res) => {
  const placeObj = {
    placeName: req.body.name,
    placeAddress: req.body.address,
    placePostcode: req.body.postcode,
  };

  queries.checkPlace(placeObj)
    .then((x) => {
      if (x.rows === 0) {
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
