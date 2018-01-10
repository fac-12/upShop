const pgp = require('pg-promise')();
const env = require('env2')('../../config.env');
const url = require('url');

const params = url.parse(process.env.HEROKU_DB);
