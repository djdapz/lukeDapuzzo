import NavButton from "../NavButton";
import React from "react";
import {shallow} from "enzyme";

import {push} from "connected-react-router"
import {mockStore} from "../../../../testConfig/testUtils";

jest.mock("connected-react-router");

push.mockReturnValue({type: "PUSH ACTION"});

describe("Nav Button", () => {
    it('should call push on redux-router when clicked', function () {
        const navButton = renderNavBar();

        navButton.simulate("click");

        expect(push).toHaveBeenCalledWith("/admin")
    });

    it('should execute callback when navigating', function () {
        let wasCalled = false;
        const callback = () => {
            wasCalled = true;
        };

        const navButton = renderNavBar(callback);

        navButton.simulate("click");

        expect(wasCalled).toBe(true)
    });
});

const renderNavBar = (callback) => shallow(<NavButton
    store={mockStore({
        route: {href: "/admin"},
        reduxRouter: {
            location: {
                pathname: "/some-route"
            }
        }
    })}
    route={{
        displayInMenuBar: true,
        isProtected: true,
        name: "ADMIN",
        href: "/admin",
        header: "Admin",
        menubarClassName: "admin-menubar"
    }} callback={callback}/>).dive();