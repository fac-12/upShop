const db = require('../database/dbConnection');

const catResults = (category) => {
  // console.log('queries.js ', category);
  return db.query(`select name, lat_long, hours, description from places inner join category_connections on category_connections.place_id = places.id where category_connections.category_id = ${category}`);

}


const checkPlace = (formData) => {
  return db.query(`
  SELECT CASE WHEN EXISTS (SELECT name FROM places WHERE name= ($1) AND address=($2) AND postcode=($3)) THEN CAST (1 AS BIT) ELSE CAST(0 AS BIT) END`, [formData.name, formData.address, formData.postcode]);
};

const getPlace = name => {
  return db.query('SELECT * FROM places WHERE name = $1', [name]);
  }

module.exports = {
  catResults,
  checkPlace,
  getPlace,
};
