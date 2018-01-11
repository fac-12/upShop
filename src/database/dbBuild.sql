BEGIN;

DROP TABLE IF EXISTS places, users, standards, categories, comments, votes, standard_connections, category_connections;

CREATE TABLE IF NOT EXISTS places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    lat_long VARCHAR(50) NOT NULL,
    hours VARCHAR(77) NOT NULL,
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
    user_id INT REFERENCES users(id),
    place_id INT REFERENCES places(id)
);

CREATE TABLE IF NOT EXISTS standard_connections (
     id SERIAL PRIMARY KEY,
     place_id INT REFERENCES places(id),
     standard_id INT REFERENCES standards(id)
);

CREATE TABLE IF NOT EXISTS category_connections (
    id SERIAL PRIMARY KEY,
    place_id INT REFERENCES places(id),
    category_id INT REFERENCES categories(id)
);


/*insert some dummy data here */
INSERT INTO places (name, lat_long, hours, description) VALUES ('Second Shot', '[51.5274670760541, -0.0573554623770449]', '[0800-1700, 0800-1700, 0800-1700, 0800-1700, 0800-1700, 0900-1700, 0900-1700]', 'Second Shot coffee is the East London cafe bringing people together by tackling homelessness one espesso at a time');

INSERT INTO users (username, email) VALUES ('Steve', 'stevebuscemi@gmail.com');

INSERT INTO categories (name, description) VALUES ('Clothes', 'Things that you can wear!'), ('Bars and Restaurants', 'Grab a bite or a drink'), ('Cafés', 'Grab a coffee or a pot of tea and cake'), ('Groceries', 'Fruit, veg, avocados, biscuits!'), ('Entertainment', 'Have a laugh at the theatre, art space, sports and more'), ('Other', 'Other weird and wonderful things');

INSERT INTO standards (name, description) VALUES ('Organic', 'Places that stock a large proportion of organic foods'), ('Eco-conscious', 'Places that are a bit green'), ('Fairtrade', 'Stock certified fairtrade products'), ('Living Wage', 'Businesses that pay its employees the living wage'), ('Community', 'Places that contribute to the community'), ('Veg*an', 'Vegetarian and Vegan focussed food');

INSERT INTO comments (place_id, user_id, comment) VALUES (1, 1, 'Fab coffee and helps people too!');

INSERT INTO votes (user_id, place_id) VALUES (1, 1);

INSERT INTO standard_connections (place_id, standard_id) VALUES (1, 3), (1, 5), (1, 4);

INSERT INTO category_connections (place_id, category_id) VALUES (1, 3);

COMMIT;
