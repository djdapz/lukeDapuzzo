INSERT INTO show (venue_id, date, style)
  VALUES (
    (SELECT id from venue where name LIKE '%Beebop%'),
    '2017-07-23',
    'Acoustic'
  );

INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Beebop%'),
  '2017-07-23',
  'Acoustic'
);


INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Beebop%'),
  '2017-07-23',
  'Acoustic'
);


INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Battle%'),
  '2017-06-26',
  'Full Band'
);


INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Beebop%'),
  '2017-07-29',
  'Acoustic'
);


INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Beebop%'),
  '2017-08-10',
  'Acoustic'
);


INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Powder Keg%'),
  '2017-08-19',
  'Acoustic'
);

INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Bandshell%'),
  '2017-05-25',
  'Full Band'
);

INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Bootstrap%'),
  '2017-11-20',
  'Acoustic'
);


INSERT INTO show (venue_id, date, style)
VALUES (
  (SELECT id from venue where name LIKE '%Fox%'),
  '2017-12-10',
  'Full Band'
);