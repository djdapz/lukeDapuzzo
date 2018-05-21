import React from "react";
import {shallow} from "enzyme";

import HeaderBar from "../HeaderBarComponent"
import {mockStore} from "../../../../testConfig/testUtils";
import {push} from "react-router-redux"
import MenuBarContainer from "../MenuBarContainer";

jest.mock("react-router-redux");

describe("Header Bar Component", () => {
    it('should initially have the dropdown collapsed', function () {
        const headerbar = shallow(<HeaderBar store={mockStore({
            route: {
                name: "/some-route"
            }
        })}/>).dive();

        expect(headerbar.find(".menubar-collapsed").length).toEqual(1)
    });

    it('should expand the dropdown when a user clicks the hamburger', function () {
        const headerbar = shallow(<HeaderBar store={mockStore({
            route: {
                name: "/some-route"
            }
        })}/>).dive();

        let socialMediaHamburger = headerbar.find("#social-media-hamburger");
        socialMediaHamburger.simulate("click");

        expect(headerbar.find(".menubar-collapsed").length).toEqual(0);
        expect(headerbar.find(".menubar-expanded").length).toEqual(1);
    });

    it('should collapse the dropdown when a user navigates', function () {
        const headerbar = shallow(<HeaderBar store={mockStore({
            route: {
                name: "/some-route"
            }
        })}/>).dive();

        const socialMediaHamburger = headerbar.find("#social-media-hamburger");
        socialMediaHamburger.simulate("click");

        expect(headerbar.find(".menubar-collapsed").length).toEqual(0);
        expect(headerbar.find(".menubar-expanded").length).toEqual(1);

        const menubarContainer = headerbar.find(MenuBarContainer).at(0);
        menubarContainer.props().callback();

        expect(headerbar.find(".menubar-collapsed").length).toEqual(0);
        expect(headerbar.find(".menubar-expanded").length).toEqual(1);
    });

    it("should call PUSH on redux-router when title is clicked", () => {
        const headerbar = shallow(<HeaderBar store={mockStore({
            route: {
                name: "/some-route"
            }
        })}/>).dive();

        let title = headerbar.find(".title");
        title.simulate("click");

        expect(push).toHaveBeenCalledWith("/")
    })
});