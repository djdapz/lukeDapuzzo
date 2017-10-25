CREATE TABLE venue (
  "id" serial,
  "city_id" INTEGER NOT NULL,
  "name" VARCHAR(50) NOT NULL ,
  "google_maps_link" TEXT NOT NULL ,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("city_id") REFERENCES "city"("id")
);