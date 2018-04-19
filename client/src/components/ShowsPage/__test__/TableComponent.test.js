import TableComponent from "../ShowListingComponent";

import React from 'react';
import Table from "../TableComponent";

describe('Burndown Component', () => {
    it("should save passed show as prop", () => {
        const headerTitle = shallow(<Table title={"A table-guy"}/>)
            .find(".live-table")
            .find(".table-header")
            .text();

        expect(headerTitle).to.equal("A table-guy");
    });

    it('should tell the user that there are no upcoming shows when no shows are passed', function () {
        const table = shallow(<Table/>)
            .find(".live-table")
            .find(".table-message");

        expect(table).to.have.length(2);
        expect(table.at(0).text()).to.equal("No upcoming shows");
        expect(table.at(1).text()).to.equal("For bookings ~click here~");
    });

    it('should link to the contact page when no shows are displayed', function () {
        const link = shallow(<Table/>)
            .find(".live-table")
            .find(".table-message")
            .find("a");

        expect(link.prop("href")).to.equal("/contact");
    });

    it('should list all of the shows when they are passed', function () {
        let show1 = {id: 6};
        let show2 = {id: 9};
        const showListing = shallow(<Table shows={[show1, show2]} />).find("ShowListing");

        expect(showListing).to.have.length(2);

        expect(showListing.at(0).key()).to.equal("6");
        expect(showListing.at(0).props().show).to.equal(show1);

        expect(showListing.at(1).key()).to.equal("9");
        expect(showListing.at(1).props().show).to.equal(show2);
    });
});