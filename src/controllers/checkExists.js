const queries = require('./queries');

exports.get = (req, res) => {

  var placeObj = {
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
