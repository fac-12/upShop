const test = require('tape');
const runDbBuild = require('../database/dbBuild.js');
const queries = require('../controllers/queries');

test('getPlace', (t) => {
  runDbBuild((err, res) => {
    queries.getPlace((error, responseRows) => {
      if (error) {
        console.log(err);
      } else {
        console.log(responseRows);
        t.equals(typeof responseRows, 'object', 'response should be an object');
        t.end();
      }
    });
  });
});