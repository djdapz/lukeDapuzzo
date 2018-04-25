import axios from "axios";
import {store} from "../config/reduxConfig";
import {getAllSongs} from "./SongsApi";
import MockAdapter from 'axios-mock-adapter';
import {getAllSongsAction} from "../actions/GetAllSongsAction";

const mockAxios = new MockAdapter(axios);

jest.mock("../config/reduxConfig");
jest.mock("../actions/GetAllSongsAction");

const songs = [
    {
        "name": "if you left tonight"
    },
    {
        "name": "i just wanna be hapy"
    }
];

const allSongsActionResult = "all songs action";

describe("Get all shows acton", () => {
    it('should dispatch the result of the getSongsAction', function () {

        mockAxios.onGet('www.garbage-url.com/api/song').reply(200, songs);
        getAllSongsAction.mockReturnValue(allSongsActionResult);

        getAllSongs();

        setTimeout(200, () =>  expect(store.dispatch).toBeCalledWith(allSongsActionResult))
    });
});