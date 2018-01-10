BEGIN;

DROP TABLE IF EXISTS places, users, standards, categories, comments, votes, standard_connections, category_connections;

CREATE TABLE IF NOT EXISTS places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    lat_long VARCHAR(50) NOT NULL,
    hours VARCHAR(56) NOT NULL,
    description VARCHAR(200) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS standards (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    place_id INT REFERENCES places(id),
    user_id INT REFERENCES users(id),
    comment VARCHAR(300) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS votes (
    id SERIAL PRIMARY KEY,
    user_id REFERENCES users(id),
    place_id REFERENCES places(id)
);

CREATE TABLE IF NOT EXISTS standard_connections (
     id SERIAL PRIMARY KEY,
     place_id INT REFERENCES places(id),
     standard_id INT REFERENCES standards(id)
);

CREATE TABLE IF NOT EXISTS category_connections (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    category_id INT REFERENCES categories(id)
);


/*insert some dummy data here */

COMMIT;
