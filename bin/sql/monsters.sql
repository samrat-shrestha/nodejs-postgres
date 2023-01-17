CREATE extension postgis;

CREATE TABLE monsters(
  id serial,
  name character varying(50),
  personality character varying(50)
);

CREATE TABLE habitats(
  id serial,
  name character varying(50),
  climate character varying(50),
  temperature int
);

CREATE TABLE lives(
  monster character varying(50),
  habitat character varying(50)
);

CREATE TABLE meetups(
  id serial,
  title character varying(50),
  address character varying(50),
  image character varying(500),
  description character varying(150)
);

CREATE TABLE geomtable (
gid serial PRIMARY KEY,
geom geometry);

INSERT INTO monsters(name, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');

INSERT INTO geomtable(geom) VALUES (ST_GeomFromGeoJSON('{"type" : "Polygon",
"coordinates" : [[[85.322108, 27.711694],
[85.522108, 27.411694],
[85.722108, 27.911694]]]}'))