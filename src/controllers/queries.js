const db = require('../database/dbConnection');

const catResults = (category) => {
  // console.log('queries.js ', category);
  return db.query(`select name, lat_long, hours, description from places inner join category_connections on category_connections.place_id = places.id where category_connections.category_id = ${category}`);

}

module.exports = {
  catResults,
};
