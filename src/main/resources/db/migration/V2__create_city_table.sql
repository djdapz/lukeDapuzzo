CREATE TABLE city (
  "id" serial,
  "state" VARCHAR(2) NOT NULL,
  "name" VARCHAR(50) NOT NULL,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("state") REFERENCES "state"("abbreviation")
);

