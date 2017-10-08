INSERT INTO venue (name, city_id, google_maps_link)
VALUES('The Powder Keg', (SELECT id FROM city where city_name = 'Niwot' and state='CO'), 'https://goo.gl/maps/ccwkfpo6Lbu');
INSERT INTO venue (name, city_id, google_maps_link)
VALUES('Bootstrap Brewing Co', (SELECT id FROM city where city_name = 'Boulder' and state='CO'), 'https://goo.gl/maps/omD8BmU78tv');
INSERT INTO venue (name, city_id, google_maps_link)
VALUES('The Bandshell', (SELECT id FROM city where city_name = 'Boulder' and state='CO'), 'https://goo.gl/maps/kd8Z6DbiXF42');
INSERT INTO venue (name, city_id, google_maps_link)
VALUES('The Fox Theater', (SELECT id FROM city where city_name = 'Boulder' and state='CO'), 'https://goo.gl/maps/9Rd8gEY2wwG2');
INSERT INTO venue (name, city_id, google_maps_link)
VALUES('The Battle Of The Bands', (SELECT id FROM city where city_name = 'Boulder' and state='CO'), 'https://goo.gl/maps/6cwSXNDx9bF2');
INSERT INTO venue (name, city_id, google_maps_link)
VALUES('The Beebop', (SELECT id FROM city where city_name = 'Boston' and state='MA'), 'https://goo.gl/maps/6cwSXNDx9bF2');


