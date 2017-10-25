CREATE TABLE show (
  "id" serial,
  "venue_id" INTEGER NOT NULL,
  "date" date,
  "style" VARCHAR(30),
  PRIMARY KEY ("id"),
  FOREIGN KEY ("venue_id") REFERENCES  "venue"("id")
)