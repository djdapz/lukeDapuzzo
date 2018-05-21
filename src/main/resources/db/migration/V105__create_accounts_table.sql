CREATE TYPE user_role AS ENUM ('USER', 'ADMIN');

CREATE TABLE account (
  id       SERIAL UNIQUE PRIMARY KEY,
  username varchar(64) NOT NULL UNIQUE,
  role     user_role DEFAULT 'USER',
  password varchar(64) NOT NULL,
  enabled  boolean default true
);