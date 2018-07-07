import {mount} from "enzyme";
import React from "react";
import AdminPage from "../AdminPageComponent";
import ReactRouterEnzymeContext from "react-router-enzyme-context";

describe("Admin Page", () => {
    const mockRouter = new ReactRouterEnzymeContext();

    it('should maybe do a thing', function () {

        mockRouter.props().history.go('/admin/songs');
        const adminPath = mount(<AdminPage {...mockRouter.props()}/>, mockRouter.get());

        console.log(adminPath.html());

        expect(adminPath.find("SongAdmin").length).toBe(1);
    });

});