const mockStore = function(state = {}) {
    return {
        getState: function () {
            return state
        },
        dispatch: function () {
            return {}
        },
        subscribe: function () {

        }
    }
};

const stubbedShows = [
    {
        "id": 1,
        "date": "2017-07-25",
        "style": "Full Band",
        "venue": {
            "id": 3,
            "name": "The Mark 2 Lounge",
            "googleMapsLink": "https://goo.gl/maps/asdfasdfSXNDx9bF2",
            "city": {
                "id": 7,
                "name": "Chicago",
                "state": {
                    "abbreviation": "IL",
                    "name": "Illinoid"
                }
            }
        }
    },
    {
        "id": 2,
        "date": "2017-07-23",
        "style": "Acoustic",
        "venue": {
            "id": 6,
            "name": "The Beebop",
            "googleMapsLink": "https://goo.gl/maps/6cwSXNDx9bF2",
            "city": {
                "id": 3,
                "name": "Boston",
                "state": {
                    "abbreviation": "MA",
                    "name": "Massachusetts"
                }
            }
        }
    }
];

export {
    mockStore,
    stubbedShows
}