CREATE TABLE state(
  abbreviation VARCHAR(2) PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE city (
  "id" serial,
  "state" VARCHAR(2) NOT NULL,
  "name" VARCHAR(50) NOT NULL,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("state") REFERENCES "state"("abbreviation")
);

