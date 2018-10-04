import React from "react";
import {shallow} from "enzyme";

import LoginPage from "../LoginPage";

import {mockStore} from "../../../../testConfig/testUtils";
import {loginAction} from "../../../actions/UserActions";
import {CLEAN, SUBMITTED} from "../../../constants/formStates";

jest.mock("../../../actions/RouteChangedAction");
jest.mock("../../../actions/UserActions");
jest.mock("@fortawesome/react-fontawesome/index.es");

describe("Login Page", () => {
    it("should render a box called login-window within the main-content", () => {
        const loginWindow = renderWithLoginState(CLEAN)
            .find(".main-content")
            .find("#login-window");

        expect(loginWindow.length).toBe(1)
    });

    it('should render login input boxes in the login-window', function () {
        const inputs = renderWithLoginState(CLEAN)
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

    it('should render a submit button', function () {
        let button = renderWithLoginState(CLEAN).find("button");

        expect(button.text()).toBe("Send it!");
    });

    it('should include a title saying "login"', function () {
        let title = renderWithLoginState(CLEAN).find("h2");

        expect(title.text()).toBe("Login");
    });

    it('should try to login the user when the login button is clicked', function () {
        let loginPage = renderWithLoginState(CLEAN);
        let button = loginPage.find("button");

        loginPage.setState({"username": "joe", "password": "secretPassword:O"});

        button.simulate('click');

        expect(loginAction).toHaveBeenCalledWith("joe", "secretPassword:O")
    });

    it('should render the spinny wheel when passed state is SUBMITTED', function () {
        let loginPage = renderWithLoginState(SUBMITTED);

        expect(loginPage.find("#loading-wheel").length).toBe(1);
        expect(loginPage.find("button").length).toBe(0);
    });

    it('should render the button wheel when passed state is FAILED or CLEAN', function () {
        let loginPage = renderWithLoginState(CLEAN);

        expect(loginPage.find("button").length).toBe(1);
        expect(loginPage.find("#loading-wheel").length).toBe(0);
    });

    it('should render the button wheel when passed state is CLEAN', function () {
        let loginPage = renderWithLoginState(CLEAN);

        expect(loginPage.find("button").length).toBe(1);
        expect(loginPage.find("#loading-wheel").length).toBe(0);
    });

    it('should tell the user that it failed to login when it happens', function () {
        expect(renderWithLoginState("FAILED").find("#user-alert").length)
            .toBe(1);

        expect(renderWithLoginState(CLEAN).find("#user-alert").length)
            .toBe(0);

        expect(renderWithLoginState("SUBMITTED").find("#user-alert").length)
            .toBe(0);

        expect(renderWithLoginState("SUCCESS").find("#user-alert").length)
            .toBe(0);

    });

    it('should submit the form when the user hits enter and is in the password field', function () {
        let loginPage = renderWithLoginState("CLEAN");

        loginPage.setState({username: "joe", password: "schmo"});

        loginPage.find("#password-field").simulate("keyUp", {key: "Enter"});

        expect(loginAction).toHaveBeenCalledWith("joe", "schmo")
    });

    let renderWithLoginState = (state) => shallow(<LoginPage store={mockStore({user: {loginState: state}})}/>).dive()


});