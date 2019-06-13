import {shallow} from "enzyme";
import React from "react";
import Menubar from "../MenuBarContainer"
import {mockStore} from "../../../../testConfig/testUtils";
import NavButton from "../NavButton";

const routes = {
    CONTACT: {
        displayInMenuBar: true,
        isProtected: false,
        name: "CONTACT",
        href: "/contact",
        header: "Contact",
        menubarClassName: "contact-menubar"
    },
    ADMIN: {
        displayInMenuBar: true,
        isProtected: true,
        name: "ADMIN",
        href: "/admin",
        header: "Admin",
        menubarClassName: "admin-menubar"
    },
};

const callback = () => 1;

describe("Menubar", () => {
    const menubarWithAuth = (auth) => shallow(
        <Menubar
            store={mockStore({user: {isAuthenticated: auth}, route: routes.ADMIN})}
            routes={routes}
            callback={callback}
            menubarPosition={"dont like this"}/>).dive();

    it('should show secure routes when only user is authenticated', function () {
        let authenticatedMenubar = menubarWithAuth(true);

        let nonAuthenticatedMenubar = menubarWithAuth(false);

        expect(authenticatedMenubar.find(NavButton).length).toBe(2);
        expect(nonAuthenticatedMenubar.find(NavButton).length).toBe(1);
    });

    it('should create two NavButtons', function () {
        let authenticatedMenubar = menubarWithAuth(true);

        expect(authenticatedMenubar.find(NavButton).length).toBe(2);
        expect(authenticatedMenubar.find(NavButton).at(0).props().callback).toBe(callback);
        expect(authenticatedMenubar.find(NavButton).at(1).props().callback).toBe(callback);
        expect(authenticatedMenubar.find(NavButton).at(0).props().route).toBe(routes.CONTACT);
        expect(authenticatedMenubar.find(NavButton).at(1).props().route).toBe(routes.ADMIN);
    });
});