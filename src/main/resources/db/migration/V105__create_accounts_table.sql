CREATE TYPE mood AS ENUM ('USER', 'ADMIN');

CREATE TABLE account (
  id       SERIAL UNIQUE PRIMARY KEY,
  username varchar(64) NOT NULL UNIQUE,
  role     mood DEFAULT 'USER',
  password varchar(64) NOT NULL
);