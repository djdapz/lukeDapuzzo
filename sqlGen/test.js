let generateSelectCity = function(cityName, state){
    return `SELECT id FROM city where city_name = '${cityName}' and state='${state}'`
}

let generateSelectVenue = function(query){
    query = query.toLowerCase();
    return `SELECT id FROM venue where lower(name) LIKE '%${query}%'`
}



let generateInsertIntoVenue = function(venueName, cityName, state, googleMapsLink){
    const city = generateSelectCity(cityName, state);
    return `INSERT INTO venue (name, city_id, google_maps_link)` + '\n' +
            `VALUES('${venueName}', (${city}), '${googleMapsLink}');`
}


let generateInsertIntoShow = function(date, venueQuery){
    const venue = generateSelectVenue(venueQuery);
    return `INSERT INTO shows (date, venue_id)` + '\n' +
            `VALUES('${date}', (${venue}));`
}

// console.log(generateInsertIntoVenue("The Powder Keg", "Niwot", "CO", "https://goo.gl/maps/ccwkfpo6Lbu"));
// console.log(generateInsertIntoVenue("Bootstrap Brewing Co", "Boulder", "CO", "https://goo.gl/maps/omD8BmU78tv"));
// console.log(generateInsertIntoVenue("The Bandshell", "Boulder", "CO", "https://goo.gl/maps/kd8Z6DbiXF42"));
// console.log(generateInsertIntoVenue("The Fox Theater", "Boulder", "CO", "https://goo.gl/maps/9Rd8gEY2wwG2"));
// console.log(generateInsertIntoVenue("The Battle Of The Bands", "Boulder", "CO", "https://goo.gl/maps/6cwSXNDx9bF2"));
// console.log(generateInsertIntoVenue("The Beebop", "Boston", "MA", "https://goo.gl/maps/6cwSXNDx9bF2"));

console.log(generateInsertIntoShow("9-10-2017", "beebop"));
