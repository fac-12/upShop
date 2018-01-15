const db = require('../database/dbConnection');

const catResults = (category) => {
  // console.log('queries.js ', category);
  return db.query(`SELECT * FROM places INNER JOIN category_connections ON category_connections.place_id = places.id WHERE category_connections.category_id = ${category}`);

}


const checkPlace = (formData) => {
  return db.query(`
  SELECT CASE WHEN EXISTS (SELECT name FROM places WHERE name= ($1) AND address=($2) AND postcode=($3)) THEN CAST (1 AS BIT) ELSE CAST(0 AS BIT) END`, [formData.name, formData.address, formData.postcode]);
};

const getPlace = (name) => {
  return db.query('select standards.name as standards, places.name, places.lat_long, places.postcode, places.hours, places.website, places.description from standards inner join standard_connections on standard_connections.standard_id = standards.id, places inner join category_connections on category_connections.place_id = places.id where standard_connections.place_id = 1 AND category_connections.category_id = 3');
};

//still need to add hours and check comments is ok
const addPlace = (formData) => {
  return db.query(`INSERT INTO places (name, address, lat_long, postcode, website, description) VALUES ($1, $2, $3, $4, $5, $6, $7) AND INSERT INTO comments VALUES ($8)`, [formData.name, formData.address, formData.lat_long, formData.postcode, formData.website, formData.description, formData.comment])
}

module.exports = {
  catResults,
  checkPlace,
  getPlace,
};
