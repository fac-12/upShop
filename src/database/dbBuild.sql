BEGIN;

DROP TABLE IF EXISTS places, users, standards, categories, comments, votes, standard_connections, category_connections;

CREATE TABLE IF NOT EXISTS places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    address VARCHAR(200) NOT NULL,
    lat_long VARCHAR(50) NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    website VARCHAR(500),
    hours VARCHAR(200) NOT NULL,
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

INSERT INTO categories (name, description) VALUES ('Clothes', 'Things that you can wear!'), ('Bars and Restaurants', 'Grab a bite or a drink'), ('Cafés', 'Grab a coffee or a pot of tea and cake'), ('Groceries', 'Fruit, veg, avocados, biscuits!'), ('Entertainment', 'Have a laugh at the theatre, art space, sports and more'), ('Other', 'Other weird and wonderful things');

INSERT INTO standards (name, description) VALUES ('Organic', 'Places that stock a large proportion of organic foods'), ('Eco-conscious', 'Places that are a bit green'), ('Fairtrade', 'Stock certified fairtrade products'), ('Living Wage', 'Businesses that pay its employees the living wage'), ('Community', 'Places that contribute to the community'), ('Veg*n', 'Vegetarian and Vegan focussed food'), ('Non-profit', 'Places that use surplus revenue to further achieve their ultimate objective'), ('Social Enterprise', 'Businesses whose social mission is as core to their success as any potential profit'), ('Bulk Bins', 'Places where you can bring your own container to fill up on dry goods'), ('Tackling Waste', 'Have a focus on reducing or repurposing waste produce');

COMMIT;
