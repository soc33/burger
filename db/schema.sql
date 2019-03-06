DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCGAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    primary key (id)
);