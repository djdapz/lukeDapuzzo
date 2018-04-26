import React from "react";
import {shallow} from "enzyme";

import LoginPage from "./LoginPage";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction";
import {mockStore} from "../../../testConfig/testUtils";

jest.mock("../../actions/RouteChangedAction");

describe("Login Page", () => {

    it("should render a box called login-window within the main-content", () => {
        const loginWindow = shallow(<LoginPage store={mockStore()}/>)
            .dive()
            .find(".main-content")
            .find("#login-window");

        expect(loginWindow.length).toBe(1)
    });

    it('should render login input boxes in the login-window', function () {
        const inputs = shallow(<LoginPage store={mockStore()}/>)
            .dive()
            .find("input");

        expect(inputs.length).toBe(2);

        let usernameInput = inputs.at(0);
        let passwordInput = inputs.at(1);

        expect(usernameInput.prop("type")).toEqual("text");
        expect(usernameInput.prop("className")).toEqual("form-control");
        expect(usernameInput.prop("placeholder")).toEqual("Username");

        expect(passwordInput.prop("type")).toEqual("password");
        expect(passwordInput.prop("className")).toEqual("form-control");
        expect(passwordInput.prop("placeholder")).toEqual("Password");
    });

    it("should register a page change when the component mounts", () => {
        shallow(<LoginPage store={mockStore()}/>).dive();
        expect(routeChanged).toHaveBeenCalledWith(routes.LOGIN)
    });

    it('should render a submit button', function () {
        let button = shallow(<LoginPage store={mockStore()}/>).dive().find("button");

        expect(button.text()).toBe("Send it!");
    });

    it('should include a title saying "login"', function () {
        let title = shallow(<LoginPage store={mockStore()}/>).dive().find("h2");

        expect(title.text()).toBe("Login");
    });
});