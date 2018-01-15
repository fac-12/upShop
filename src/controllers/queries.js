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
  return db.query(`SELECT * FROM places WHERE name = ($1)`, [name]);
}

const getValues = (id) => {
  return db.query(`SELECT array_agg(standards.name) as standard FROM standards INNER JOIN standard_connections ON standard_connections.standard_id = standards.id WHERE standard_connections.place_id = ($1)`, [id]);
}

module.exports = {
  catResults,
  checkPlace,
  getPlace,
  getValues,
};
