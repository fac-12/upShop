const queries = require('./queries');



exports.get = (req, res) => {
res.render('success', {
        layout: 'navHome',
      });

};
