//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {

  console.log(req.params)
  const cat = req.params.category;

  // const location = req.params.location;

//query db with "cat" & location
queries
    .catResults(cat)
    .then(resultsArr => {
      console.log(resultsArr);
      res.render('listView', {
          resultsArr, layout: 'list',
        });
    })
    .catch((err) => {
      console.log(err);
    })
//render 'category results';
};
