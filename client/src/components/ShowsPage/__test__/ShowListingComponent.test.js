import ShowListing from "../ShowListingComponent";

import React from 'react';

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

describe('Burndown Component', () => {
    it("should save passed show as prop", () => {
        const wrapper = mount(<ShowListing show={show}/>);

        expect(wrapper.prop("show")).to.equal(show)

    });

    it('should render a div with class listing ', function () {
        const showListingComponent = mount(<ShowListing show={show}/>);

        expect(showListingComponent.find(".listing")).to.have.length(1);
    });

    it('should render a listing with a date and location', function () {
        let listingDiv = mount(<ShowListing show={show}/>).find(".listing");

        expect(listingDiv.find(".listing-date")).to.have.length(1);
        expect(listingDiv.find(".listing-location")).to.have.length(1)
    });

    it('should render the date as a string', function () {
        let listingDate = mount(<ShowListing show={show}/>).find(".listing-date");

        expect(listingDate.text()).to.equal("2017-07-23")
    });

    it('should render the venue name in a link under listing-location > listing-venue', () => {
        let venueName = mount(<ShowListing show={show}/>)
            .find(".listing-location")
            .find(".listing-venue")
            .find(".alert-link")
            .text();

        expect(venueName).to.equal("The Beebop")
    });

    it('should add a google maps link around the listing name', function () {
        let venueLink = mount(<ShowListing show={show}/>)
            .find(".listing-location")
            .find(".listing-venue")
            .find(".alert-link");

        expect(venueLink.prop("href")).to.equal("https://goo.gl/maps/6cwSXNDx9bF2");
    });

    it("shold combine city name and city state under listing-city", function(){
        let cityText = mount(<ShowListing show={show}/>)
            .find(".listing-location")
            .find(".listing-city")
            .text();

        expect(cityText).to.equal("Boston, MA");

    })
});