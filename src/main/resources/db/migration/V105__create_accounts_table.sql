CREATE TABLE account (
  id       SERIAL UNIQUE PRIMARY KEY,
  username varchar(32) NOT NULL UNIQUE,
  password varchar(32) NOT NULL
)