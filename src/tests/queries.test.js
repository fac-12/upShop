const test = require('tape');
const runDbBuild = require('../database/dbBuild.js');
const queries = require('../controllers/queries');

test('testing tape is working', (t) => {
  t.equals(1, 1, 'one equals one');
  t.end();
});

test('testing getPlace query returns an object', (t) => {
  runDbBuild((err, res) => {
    queries.getPlace('Second Shot').then((res) => {
      t.equals(typeof res, 'object', 'response should be an object');
      t.end();
    });
  });
});

test('testing catResults query is returning an object', (t) => {
  runDbBuild((err, res) => {
    queries.catResults('3').then((res) => {
      t.equals(typeof res, 'object', 'response should be an object');
      t.end();
    });
  });
});

test('testing catResults query is returning an object with length 11', (t) => {
  runDbBuild((err, res) => {
    queries.catResults('3').then((res) => {
      t.equals(Object.keys(res[0]).length, 11, 'Object contains 11 keys');
      t.end();
    });
  });
});

test('testing checkPlace query returns true', (t) => {
  runDbBuild((err, res) => {
    const testObj = {
      name: 'Second Shot',
      address: '475 Bethnal Green Rd',
      postcode: 'E2 9QH',
    };

    queries.checkPlace(testObj).then((res) => {
      t.deepEquals(Object.values(res[0]), ['1'], 'response should return true (1)');
      t.end();
    });
  });
});

test('testing checkPlace query returns false', (t) => {
  runDbBuild((err, res) => {
    const testObj = {
      name: 'Second Shot',
      address: '475 Bethnal Green Rd',
      postcode: 'E2 9AA',
    };

    queries.checkPlace(testObj).then((res) => {
      t.deepEquals(Object.values(res[0]), ['0'], 'response should return false (0)');
      t.end();
    });
  });
});
