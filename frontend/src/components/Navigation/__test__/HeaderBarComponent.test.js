import React from "react";
import {shallow} from "enzyme";

import HeaderBar from "../HeaderBarComponent"
import {mockStore} from "../../../../testConfig/testUtils";
import {push} from "react-router-redux"
import MenuBarContainer from "../MenuBarContainer";
import {getAllSongs} from "../../../actions/GetAllSongs";
import {getAllShows} from "../../../actions/GetAllShows";

jest.mock("../../../actions/GetAllSongs");
jest.mock("../../../actions/GetAllShows");

jest.mock("react-router-redux");

describe("Header Bar Component", () => {
    const reduxRouter = {
        reduxRouter: {
            location: {
                pathname: "/some-route"
            }
        }
    };
    it('should initially have the dropdown collapsed', function () {
        const headerbar = shallow(<HeaderBar store={mockStore(reduxRouter)}/>).dive();
        expect(headerbar.find("Connect(Menubar)").prop("menubarClass")).toEqual("menubar-collapsed");
    });

    it('should expand the dropdown when a user clicks the hamburger', function () {
        const headerbar = shallow(<HeaderBar store={mockStore(reduxRouter)}/>).dive();

        let socialMediaHamburger = headerbar.find("#social-media-hamburger");
        socialMediaHamburger.simulate("click");

        expect(headerbar.find("Connect(Menubar)").prop("menubarClass")).toEqual("menubar-expanded");
    });

    it('should collapse the dropdown when a user navigates', function () {
        const headerbar = shallow(<HeaderBar store={mockStore(reduxRouter)}/>).dive();

        const socialMediaHamburger = headerbar.find("#social-media-hamburger");
        socialMediaHamburger.simulate("click");

        expect(headerbar.find("Connect(Menubar)").prop("menubarClass")).toEqual("menubar-expanded");

        const menubarContainer = headerbar.find(MenuBarContainer).at(0);
        menubarContainer.props().callback();

        headerbar.update();

        expect(headerbar.find("Connect(Menubar)").prop("menubarClass")).toEqual("menubar-collapsed");
    });

    it("should call PUSH on redux-router when title is clicked", () => {
        const headerbar = shallow(<HeaderBar store={mockStore(reduxRouter)}/>).dive();

        let title = headerbar.find(".title");
        title.simulate("click");

        expect(push).toHaveBeenCalledWith("/")
    });

    it('should call getall songs and shows when the page initially loads', function () {
        shallow(<HeaderBar store={mockStore(reduxRouter)}/>).dive();

        expect(getAllSongs).toHaveBeenCalled();
        expect(getAllShows).toHaveBeenCalled();
    });
});