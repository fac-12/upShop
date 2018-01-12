const queries = require('./queries');

exports.get = (req, res) => {
console.log(req.query);
res.render('success', {
        layout: 'navHomeBack',
      });

};