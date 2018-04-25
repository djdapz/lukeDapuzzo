import {GET_ALL_SONGS, getAllSongsAction} from "./GetAllSongsAction";
import axios from "axios";
import {LUKE_API} from "../config/appConfig";

jest.mock('axios');

describe("Get all shows acton", () => {
    it('should return an action with type GET_ALL_SHOWS', function () {
        const allSongs = getAllSongsAction([]);

        expect(allSongs.type).toEqual(GET_ALL_SONGS)
    });

    it('should forward shows passsed to it', function () {
        let shows = [1, 2];
        const allSongs = getAllSongsAction(shows);

        expect(allSongs.payload).toEqual(shows)
    });
});