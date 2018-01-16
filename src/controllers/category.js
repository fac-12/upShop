//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {

  const cat = req.query.category;

  if(isNaN(cat)){
    res.render('error',{ layout: 'error' });
  } else if(cat > 6 || cat < 1){
    res.render('error', { layout: 'error' });
  } else {
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

  }
  // const location = req.params.location;

//query db with "cat" & location
