CREATE TABLE venue (
  "id" serial,
  "city_id" INTEGER NOT NULL,
  "name" VARCHAR(50) NOT NULL ,
  "google_maps_link" TEXT NOT NULL ,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("city_id") REFERENCES  "city"("id")
);

CREATE TABLE show (
  "id" serial,
  "venue_id" INTEGER NOT NULL,
  "date" date,
  "style" VARCHAR(30),
  PRIMARY KEY ("id"),
  FOREIGN KEY ("venue_id") REFERENCES  "venue"("id")
)