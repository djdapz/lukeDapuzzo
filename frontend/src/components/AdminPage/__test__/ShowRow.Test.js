import React from "react"
import {shallow} from "enzyme";
import ShowRow from "../ShowRow";
import {Show} from "../../../classes/Show";

import {deleteShow} from "../../../actions/DeleteShowAction";
import {mockStore} from "../../../../testConfig/testUtils";

jest.mock("../../../actions/DeleteShowAction");

let show = Show.fromJson({
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

describe("ShowRow", () => {
    it("should include a column for each field", () => {
        let showRow = shallow(<ShowRow store={mockStore()} show={show}/>).dive();
        expect(showRow.find(".show-column").length).toBe(6);

        expect(showRow.find(".city-column").at(0).text()).toBe("Boston, MA");
        expect(showRow.find(".date-column").at(0).text()).toBe("2017-07-23");
        expect(showRow.find(".venue-column").at(0).text()).toBe("The Beebop");
        expect(showRow.find(".venue-link-column").at(0).text()).toBe("https://goo.gl/maps/6cwSXNDx9bF2");
        expect(showRow.find(".style-column").at(0).text()).toBe("Acoustic");
    });

    it('should dispatch a delete show action when the trash can button is clicked', function () {
        shallow(<ShowRow store={mockStore()} show={show}/>)
            .dive()
            .find("button")
            .simulate("click");

        expect(deleteShow).toHaveBeenCalledWith(1)
    });
});