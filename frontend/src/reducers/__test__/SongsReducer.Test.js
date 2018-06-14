import {ALL_SONGS_FETCHED} from "../../actions/GetAllSongs";
import songsReducer from "../SongsReducer";
import {SONG_CREATED} from "../../actions/CreateSongAction";
import {SONG_DELETED} from "../../actions/DeleteSongAction";

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

    it("should append a newley created song to the list of songs", () => {
        const songs = songsReducer([{id: 2}], {
            type: SONG_CREATED,
            payload: {id: 1}
        });

        expect(songs[0].id).toEqual(1);
        expect(songs[1].id).toEqual(2);
    });

    it('should remove a song when a song sucessfully deleted', function () {
        let originalSongs = [
            {id: 1},
            {id: 2},
            {id: 3}
        ];

        let expectedSongs = [
            {id: 1},
            {id: 3}
        ];

        const songDeletedAction = {
            type: SONG_DELETED,
            payload: {id: 2}
        };

        expect(songsReducer(originalSongs, songDeletedAction)).toEqual(expectedSongs);
    });
});