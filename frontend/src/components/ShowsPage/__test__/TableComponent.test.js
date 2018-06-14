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
        const message = shallow(<Table/>)
            .find(".table-message");

        expect(message).toHaveLength(2);
        expect(message.at(0).text()).toBe("No upcoming shows");
        expect(message.at(1).text()).toContain("For bookings");
        expect(message.find("Link").props().children).toBe("click here");
        expect(message.find("Link").props().to).toBe("/contact")
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