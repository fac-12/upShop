const test = require('tape');
const runDbBuild = require('../database/dbBuild.js');
const queries = require('../controllers/queries');



test("tape is working", t => {
  t.equals(1,1, "one equals one");
  t.end();
});

test('getPlace', (t) => {
  runDbBuild((err, res) => {
    queries.getPlace('Second Shot').then(res => {
        t.equals(typeof res, 'object', 'response should be an object');
        t.end();
      });
    });
  });
