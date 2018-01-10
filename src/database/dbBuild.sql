BEGIN;

DROP TABLE IF EXISTS places, users, standards, categories, comments, votes, standard_connections, category_connections;

CREATE TABLE IF NOT EXISTS places (
    place_id SERIAL PRIMARY KEY,
    place_name VARCHAR(200) NOT NULL,
    place_lat_long VARCHAR(50) NOT NULL,
    place_hours VARCHAR(56) NOT NULL,
    place_desc VARCHAR(200) NOT NULL,
    place_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    user_create TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS categories (
    cat_name VARCHAR(50) NOT NULL,
    cat_desc VARCHAR(200) NOT NULL,
    cat_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS standards (
    standard_id SERIAL PRIMARY KEY,
    standard_name VARCHAR NOT NULL,
    standard_desc VARCHAR NOT NULL,
    standard_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS comments (
    comment_id SERIAL PRIMARY KEY,
    place_id INT REFERENCES places(place_id),
    user_id INT REFERENCES users(user_id),
    comment VARCHAR(300) NOT NULL,
    comment_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS votes (
    vote_id SERIAL PRIMARY KEY,
    user_id REFERENCES users(user_id),
    place_id REFERENCES places(place_id)
)

CREATE TABLE IF NOT EXISTS standard_connections (
     id SERIAL PRIMARY KEY,
     place_id INT REFERENCES places(place_id),
     standard_id INT REFERENCES standards(standard_id)
)

CREATE TABLE IF NOT EXISTS category_connections (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    place_id INT REFERENCES places(place_id)
)


/*insert some dummy data here */

COMMIT;
