//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {
  const cat = req.params.category;

  // const location = req.params.location;

//query db with "cat" & location
queries
    .catResults(cat)
    .catch((err) => {
      console.log("here1");
      console.log(err);
    })
    .then(resultsArr => {
      console.log("here2")
      console.log("resultsarr", resultsArr);
      res.render('listView', {
          resultsArr, layout: 'list',
        });
    })
};
