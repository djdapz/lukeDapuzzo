import axios from "axios";
import {store} from "../config/reduxConfig";
import {getAllShows} from "./ShowsApi";
import MockAdapter from 'axios-mock-adapter';
import {getAllShowsAction} from "../actions/GetAllShowsAction";

const mockAxios = new MockAdapter(axios);

jest.mock("../config/reduxConfig");
jest.mock("../actions/GetAllShowsAction");

const shows = [
    {
        "name": "disco party"
    },
    {
        "name": "goofy goober reunion"
    }
];

const allShowsActionResult = "all shows action";

describe("Get all shows acton", () => {
    it('should dispatch the result of an action with type GET_ALL_SHOWS', function () {

        mockAxios.onGet('www.garbage-url.com/api/shows').reply(200, shows);
        getAllShowsAction.mockReturnValue(allShowsActionResult);

        getAllShows();

        setTimeout(200, () =>  expect(store.dispatch).toBeCalledWith(allShowsActionResult))
    });
});