ALTER TABLE song
  DROP CONSTRAINT song_pkey;

ALTER TABLE song
  ADD PRIMARY KEY (id, song_type);

ALTER TABLE song
    ALTER column id TYPE VARCHAR(50)
