import {GET_ALL_SHOWS, getAllShowsAction} from "./GetAllShowsAction";
import axios from "axios";
import {LUKE_API} from "../config/appConfig";

jest.mock('axios');

describe("Get all shows acton", () => {
    it('should return an action with type GET_ALL_SHOWS', function () {
        const allShows = getAllShowsAction([]);

        expect(allShows.type).toEqual(GET_ALL_SHOWS)
    });

    it('should forward shows passsed to it', function () {
        let shows = [1,2];
        const allShows = getAllShowsAction(shows);

        expect(allShows.payload).toEqual(shows)
    });
});