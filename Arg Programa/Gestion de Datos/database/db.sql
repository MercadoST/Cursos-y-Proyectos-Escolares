-- to create a new database
CREATE DATABASE circulosangre;

-- to use database
use circulosangre;

-- creating a new table
CREATE TABLE asociados (
  dni INT(8) UNSIGNED NOT NULL PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  apellido VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  fnacimiento VARCHAR(30) NOT NULL,
  grsan VARCHAR(30) NOT NULL,
  enfermedad VARCHAR(30) NOT NULL,
);

-- to show all tables
show tables;

-- to describe table
describe asociados;