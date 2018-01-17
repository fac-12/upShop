const db = require('../database/dbConnection');

const getPlacesByCat = (category) => {
  // console.log('queries.js ', category);
  return db.query(`SELECT * FROM places INNER JOIN category_connections ON category_connections.place_id = places.id WHERE category_connections.category_id = ${category}`);
};

const checkPlace = (formData) => {
  return db.query(`
  SELECT CASE WHEN EXISTS (SELECT name FROM places WHERE name= ($1) AND address=($2) AND postcode=($3)) THEN CAST (1 AS BIT) ELSE CAST(0 AS BIT) END`, [formData.name, formData.address, formData.postcode]);
};

const getPlace = (name) => {
  return db.query(`
  SELECT * FROM places WHERE name = ($1)`, [name]);
};

const getValues = (id) => {
  return db.query(`
  SELECT array_agg(standards.name) as standard FROM standards INNER JOIN standard_connections ON standard_connections.standard_id = standards.id WHERE standard_connections.place_id = ($1)`, [id]);
};

//still need check comments
const addPlace = (formData, hours) => {
  console.log("category: ", formData.category);
  return db.query(`
  INSERT INTO places (name, address, lat_long, postcode, website, hours, description) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [formData.name, formData.address, formData.lat_long, formData.postcode, formData.website, hours, formData.description]);
};

const getPlacesByStandard = (standard) => {
  return db.query (`SELECT * FROM places INNER JOIN standard_connections ON standard_connections.place_id = places.id WHERE standard_connections.standard_id = ${standard}`);
};

const addCatConnections = (formData) => {
  return db.query(`
  INSERT INTO category_connections (place_id, category_id) VALUES ((SELECT id FROM places WHERE name = $1), (SELECT id FROM categories WHERE name=$2))`, [formData.name, formData.category]);
};

module.exports = {
  getPlacesByCat,
  checkPlace,
  getPlace,
  addPlace,
  getValues,
  getPlacesByStandard,
  addCatConnections,
};
