import {shallow} from "enzyme";
import React from "react";
import Menubar from "../MenuBarContainer"
import {mockStore} from "../../../../testConfig/testUtils";

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

describe("Menubar", () => {
    const menubarWithAuth = (auth) => shallow(
        <Menubar
            store={mockStore({user: {isAuthenticated: auth}, route: routes.ADMIN})}
            routes={routes}
            menubarPosition={"dont like this"}/>).dive();

    it('should show secure routes when only user is authenticated', function () {
        let authenticatedMenubar = menubarWithAuth(true);

        let nonAuthenticatedMenubar = menubarWithAuth(false);

        expect(authenticatedMenubar.find(".menubar-link").length).toBe(2);
        expect(nonAuthenticatedMenubar.find(".menubar-link").length).toBe(1);
    });
});