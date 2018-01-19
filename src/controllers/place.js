const queries = require('./queries');

exports.get = (req, res) => {

const placeName = req.params.place;
console.log("placeName", placeName)

  // queries
  //   .checkPlaceExists(placeName)
  //   .then((x)=> {
  //     console.log(x[0].case);
  //       if (x[0].case == 0) {
  //         const errMessage = 'This place does not exist!';
  //         throw new Error(errMessage);

  //   } else {

      queries
        .getPlace(placeName)
        .then((placeDetails) => {
          const placeResults = placeDetails[0]
          const placeResultsId = placeDetails[0].id
          const placeHours = JSON.parse(placeResults.hours)
          queries.getValues(placeResultsId)
            .then((getValueResult) => {
              const values = getValueResult[0].standard;
              res.render('placeDetails', { placeResults, placeHours, values, layout: 'navHome' })
            })
            .catch((err) => {
              console.log('catch err 1 ',err);
            })
        })
          .catch((err) => {
          console.log('catch err 2', err);
          })
}

// })
// // .catch((err)=> {
// //   res.render('error', {
// //             err,
// //             layout: 'error',
// //           });
// })

// }
