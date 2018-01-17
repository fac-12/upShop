//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {

  const cat = req.query.category;

  // const location = req.params.location;

//query db with "cat" & location
queries
    .catResults(cat)
    .catch((err) => {
      console.log(err);
    })
    .then(resultsArr => {
      res.render('listView', {
          resultsArr, layout: 'list',
        });
    })
};
