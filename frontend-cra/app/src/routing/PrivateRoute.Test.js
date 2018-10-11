import React from "react";
import PrivateRoute from "./PrivateRoute";
import {shallow} from "enzyme";
import {store} from "../config/reduxConfig"

jest.mock("../config/reduxConfig");

const component = () => <div>I'm a component!</div>;

describe("Private Route", () => {
    it('should pass the component to the Router component prop if the store says user is authenticated and forward props', function () {
        store.getState.mockReturnValue({
            user: {
                isAuthenticated: true
            }
        });

        const anyProp = {
            field: "is a thing"
        };

        let router = shallow(<PrivateRoute component={component} anyProp={anyProp}/>).find("Route");
        let redirect = shallow(<PrivateRoute component={component} anyProp={anyProp}/>).find("Redirect");

        expect(redirect.length).toBe(0);
        expect(router.prop("component")).toEqual(component);
        expect(router.prop("anyProp")).toEqual(anyProp)
    });

    it('should pass the login page to the router if the store says the user is not authenticated', () => {
        store.getState.mockReturnValue({
            user: {
                isAuthenticated: false
            }
        });

        let router = shallow(<PrivateRoute component={component}/>).find("Router");
        let redirect = shallow(<PrivateRoute component={component}/>).find("Redirect");

        expect(router.length).toBe(0);
        expect(redirect.prop("to").pathname).toBe("/login");
    })
});