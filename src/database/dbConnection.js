const pgp = require('pg-promise')();
const env = require('env2')('../../config.env');
const url = require('url');

const params = url.parse(process.env.DATABASE_URL);

const [ username, password ] = params.auth.split(':');

const herokuDB = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  ssl: true,
};

if (username) { herokuDB.user = username; }
if (password) { herokuDB.password = password; }

const localDB = {
  host: 'localhost',
  port: 5432,
  database: 'upShop',
// Below needs to have your own details in!
  user: 'master',
  password: 'password'
};

const connection = process.env.NODE_ENV === 'production' ? herokuDB : localDB;

const db = pgp(connection);
module.exports = db; 
