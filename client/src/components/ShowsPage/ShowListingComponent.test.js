import ShowListing from "./ShowListingComponent";

import React from 'react';
import {shallow} from "enzyme";

const show = {
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
};

describe('Listing Component', () => {
    it('should render a div with class listing ', function () {
        const showListingComponent = shallow(<ShowListing show={show}/>);

        expect(showListingComponent.find(".listing")).toHaveLength(1);
    });

    it('should render a listing with a date and location', function () {
        let listingDiv = shallow(<ShowListing show={show}/>).find(".listing");

        expect(listingDiv.find(".listing-date")).toHaveLength(1);
        expect(listingDiv.find(".listing-location")).toHaveLength(1)
    });

    it('should render the date as a string', function () {
        let listingDate = shallow(<ShowListing show={show}/>).find(".listing-date");

        expect(listingDate.text()).toBe(show.date)
    });

    it('should render the venue name in a link under listing-location > listing-venue', () => {
        let venueName = shallow(<ShowListing show={show}/>)
            .find(".listing-location")
            .find(".listing-venue")
            .find(".alert-link")
            .text();

        expect(venueName).toBe("The Beebop")
    });

    it('should add a google maps link around the listing name', function () {
        let venueLink = shallow(<ShowListing show={show}/>)
            .find(".listing-location")
            .find(".listing-venue")
            .find(".alert-link");

        expect(venueLink.prop("href")).toBe("https://goo.gl/maps/6cwSXNDx9bF2");
    });

    it("shold combine city name and city state under listing-city", function () {
        let cityText = shallow(<ShowListing show={show}/>)
            .find(".listing-location")
            .find(".listing-city")
            .text();

        expect(cityText).toBe("Boston, MA");

    })
});