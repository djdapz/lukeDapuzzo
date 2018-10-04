import React from "react"
import {shallow} from "enzyme";
import ShowAdmin from "../ShowAdmin";
import {mockStore} from "../../../../testConfig/testUtils";
import ShowRow from "../ShowRow"

describe("Show Admin",() => {
    it("should render a ShowRow for each show", () => {
        let shows = [
            "show1",
            "show2"
        ];
        let store = mockStore({shows: shows});
        let showAdmin = shallow(<ShowAdmin store={store}/>).dive();

        expect(showAdmin.find(ShowRow).length).toBe(2);

        expect(showAdmin.find(ShowRow).at(0).prop("show")).toBe("show1");
        expect(showAdmin.find(ShowRow).at(1).prop("show")).toBe("show2");
    })
});