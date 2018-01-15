const queries = require('./queries');

exports.get = (req, res) => {

  const placeObj = {
    name: req.query.name,
    address: req.query.address,
    postcode: req.query.postcode
  }

  queries.checkPlace(placeObj)
    .then((x) => {
      if (x[0].case == 0) {
        res.render('addMoreDetails', {
          placeObj, layout: 'navHome',
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
};
