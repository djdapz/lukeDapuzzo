export class Show {
    static fromJson(json) {
        return new Show(
            json.date,
            json.id,
            json.notes,
            Venue.fromJson(json.venue)
        )
    }

    constructor(date, id, notes, venue) {
        this.id = id;
        this.venue = venue;
        this.date = date;
        this.notes = notes;
    }

    get venueName(){
        return this.venue.name
    }

    get venueLink(){
        return this.venue.googleMapsLink
    }

    get cityString(){
        return this.venue.city.name + ", " + this.venue.city.state.abbreviation
    }
}

export class Venue {
    static fromJson(venue) {
        return new Venue(
            venue.id,
            venue.name,
            venue.googleMapsLink,
            City.fromJson(venue.city)
        )
    }

    constructor(id, name,googleMapsLink, city) {
        this.id = id;
        this.name = name;
        this.googleMapsLink = googleMapsLink;
        this.city = city;
    }
}

export class City {
    static fromJson(json) {
        return new City(
            json.name,
            State.fromJson(json.state)
        )
    }

    constructor(name, state) {
        this.name = name;
        this.state = state;
    }
}

export class State {
    static fromJson(json) {
        return new State(
            json.abbreviation,
            json.name
        )
    }

    constructor(abbreviation, name) {
        this.abbreviation = abbreviation;
        this.name = name;
    }
}