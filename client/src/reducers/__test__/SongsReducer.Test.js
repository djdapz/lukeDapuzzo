import {ALL_SONGS_FETCHED} from "../../actions/GetAllSongs";
import songsReducer from "../SongsReducer";

const songs = [
    {
        name: "I just wanna be happy"
    },
    {
        name: "and make other happy"

    }
];
describe("Songs reducer", () => {
    it('should return the list of songs', function () {
        let reducedSongs = songsReducer("Default", {
            type: ALL_SONGS_FETCHED,
            payload: songs
        });

        expect(reducedSongs).toEqual(songs)
    });

    it('should return the default if it was not the fetch songs action', function () {
        const defaultValue = songsReducer("Default", {
            type: "SOMETHING_ELSE",
            payload: "It doesnt matter"
        });

        expect(defaultValue).toEqual("Default")
    });
});