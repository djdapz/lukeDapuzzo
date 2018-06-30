import React from "react";
import {shallow} from "enzyme";

import MusicPageComponent from "../MusicPageComponent";
import {mockStore} from "../../../../testConfig/testUtils";
import {routeChanged} from "../../../actions/RouteChangedAction";
import routes from "../../../constants/routes";
import {getAllSongs} from "../../../actions/GetAllSongs";

jest.mock("../../../actions/RouteChangedAction");
jest.mock("../../../actions/GetAllSongs");

jest.spyOn(global.console, 'error');

describe('Music Page Component', () => {
    it('should dispatch the the route has changed', function () {
        shallow(<MusicPageComponent store={mockStore({songs: []})}/>).dive();
        expect(routeChanged).toHaveBeenCalledWith(routes.MUSIC)
    });

    it('should call the get songs api upon construction', function () {
        shallow(<MusicPageComponent store={mockStore({songs: []})}/>).dive();
        expect(getAllSongs).toHaveBeenCalled()
    });

    it('should render a div with id music-page and class main-content', function () {
        let musicPage = shallow(<MusicPageComponent store={mockStore({songs: []})}/>)
            .dive();

        let musicPageById = musicPage.find("#music-page");
        let musicPageByClass = musicPage.find(".main-content");

        expect(musicPageById.length).toBe(1);
        expect(musicPageById).toEqual(musicPageByClass)
    });


    it('should print an error if invalid song is paased', function () {
        shallow(<MusicPageComponent store={mockStore({songs: [{bad: "field"}]})}/>);
        expect(console.error).toHaveBeenCalled()
    });

});