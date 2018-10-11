import React from "react"
import {Show} from "../Show";

describe("Show", () => {
    it("should print city name as City, ST", () => {
        const show = Show.fromJson({
            "id": 1,
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
        });

        expect(show.cityString).toEqual("Boston, MA");
    })
});