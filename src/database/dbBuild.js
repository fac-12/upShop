const { QueryFile } = require('pg-promise');
const path = require('path');
const db = require('./dbConnection');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./dbBuild.sql');

const runDbBuild = (cb) => {

    db
    .query(build)
    .then(cb)
    .catch(e => console.error('error', e));
}


module.exports = runDbBuild;
