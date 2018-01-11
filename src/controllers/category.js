//goes to category they have selected
const queries = require('./queries');


exports.get = (req,res) => {

  const cat = req.params.category;
  console.log('cat: ', cat);

  // const location = req.params.location;

//query db with "cat" & location
queries
    .catResults(cat)
    .then(catList => {
      console.log('catList: ', catList);
      res.render('categories');
    })
    .catch((err) => {
      console.log(err);
    })
//render 'category results';
};
