import TableComponent from "../ShowListingComponent";

import React from 'react';
import Table from "../TableComponent";
import {shallow} from "enzyme";

describe('Table Component', () => {
    it("should save passed show as prop", () => {
        const headerTitle = shallow(<Table title={"A table-guy"}/>)
            .find(".live-table")
            .find(".table-header")
            .text();

        expect(headerTitle).toBe("A table-guy");
    });

    it('should tell the user that there are no upcoming shows when no shows are passed', function () {
        const table = shallow(<Table/>)
            .find(".live-table")
            .find(".table-message");

        expect(table).toHaveLength(2);
        expect(table.at(0).text()).toBe("No upcoming shows");
        expect(table.at(1).text()).toBe("For bookings ~click here~");
    });

    it('should link to the contact page when no shows are displayed', function () {
        const link = shallow(<Table/>)
            .find(".live-table")
            .find(".table-message")
            .find("a");

        expect(link.prop("href")).toBe("/contact");
    });

    it('should list all of the shows when they are passed', function () {
        let show1 = {id: 6};
        let show2 = {id: 9};
        const showListing = shallow(<Table shows={[show1, show2]} />).find("ShowListing");

        expect(showListing).toHaveLength(2);

        expect(showListing.at(0).key()).toBe("6");
        expect(showListing.at(0).props().show).toBe(show1);

        expect(showListing.at(1).key()).toBe("9");
        expect(showListing.at(1).props().show).toBe(show2);
    });
});