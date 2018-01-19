const queries = require('./queries');
const fetch = require('isomorphic-fetch');

exports.get = (req, res) => {

    if(req.query.name === undefined) {
  const err = 'You need to fill in some details!';
  res.render('error', {
            err,
            layout: 'error',
          });
}

else {

  const placeObj = {
    name: req.query.name,
    address: req.query.address,
    postcode: req.query.postcode,
    lat_long: '',
  };

  console.log("placeObj", placeObj);

  const pc = encodeURI(req.query.postcode);

  //Calls postcodes.io API to convert postcode into lat long
  fetch(`https://api.postcodes.io/postcodes/${pc}`)
    .then((response) => {
      if (response.status >= 400) {
        const errorMessage = 'This postcode does not exist';
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      placeObj.lat_long = [data.result.latitude, data.result.longitude];
      queries.checkPlace(placeObj)
        .then((x) => {
          if (x[0].case == 0) {
            const nameEnc = encodeURI(placeObj.name);
            const addressEnc = encodeURI(placeObj.address);

            const encodedObj = {
              name: nameEnc,
              address: addressEnc,
              postcode: pc,
              lat_long: placeObj.lat_long,
            };

            const placeName = placeObj.name;
            const placeAddress = placeObj.address;

            res.render('addMoreDetails', {
              encodedObj, placeName, placeAddress, layout: 'navHome',
            });
          } else {
            res.render('businessExists', {
              layout: 'navHome',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
    })

    .catch((err) => {
      res.render('error', { err,
        layout: 'error',
});
   });
};
};