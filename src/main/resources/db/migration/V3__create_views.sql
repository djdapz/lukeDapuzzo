CREATE VIEW all_shows as
  select show.id, date, style, venue.name as venue, google_maps_link, state, city.name as city
  from show show
    inner join venue venue
      on show.venue_id = venue.id
    inner join city city
      on city.id = venue.city_id
    inner join state as state
      on city.state = state.abbreviation;