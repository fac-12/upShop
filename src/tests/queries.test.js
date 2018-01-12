const test = require('tape');
const runDbBuild = require('../database/dbBuild.js');
const queries = require('../controllers/queries');



test("testing tape is working", t => {
  t.equals(1,1, "one equals one");
  t.end();
});

test('testing getPlace query returns an object', (t) => {
  runDbBuild((err, res) => {
    queries.getPlace('Second Shot').then(res => {
        t.equals(typeof res, 'object', 'response should be an object');
        t.end();
      });
    });
  });

  test('testing catResults query is returning an object', (t) => {
    runDbBuild((err, res) => {
      queries.catResults('3').then(res => {
          t.equals(typeof res, 'object', 'response should be an object');
          t.end();
        });
      });
    });

    test('testing catResults query is returning an object with length 4', (t) => {
      runDbBuild((err, res) => {
        queries.catResults('3').then(res => {
            t.equals(Object.keys(res[0]).length, 4, 'Object contains 4 keys');
            t.end();
          });
        });
      });
