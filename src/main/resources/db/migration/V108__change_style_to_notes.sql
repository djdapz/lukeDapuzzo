ALTER TABLE show
  RENAME style TO notes;

DROP VIEW all_shows;

ALTER TABLE show
  ALTER COLUMN notes TYPE TEXT;