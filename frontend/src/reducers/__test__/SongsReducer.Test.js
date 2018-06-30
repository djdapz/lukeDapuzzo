import {ALL_SONGS_FETCHED} from "../../actions/GetAllSongs";
import songsReducer from "../SongsReducer";
import {SONG_CREATED} from "../../actions/CreateSongAction";
import {SONG_DELETED} from "../../actions/DeleteSongAction";

describe("Songs reducer", () => {
    it('should return the list of songs', function () {
        let reducedSongs = songsReducer("Default", {
            type: ALL_SONGS_FETCHED,
            payload: [
                {
                    name: "I just wanna be happy"
                },
                {
                    name: "and make other happy"

                }
            ]
        });

        expect(reducedSongs).toEqual([
            {
                name: "I just wanna be happy"
            },
            {
                name: "and make other happy"

            }
        ])
    });

    it('should return the default if it was not the fetch songs action', function () {
        const defaultValue = songsReducer("Default", {
            type: "SOMETHING_ELSE",
            payload: "It doesnt matter"
        });

        expect(defaultValue).toEqual("Default")
    });

    it("should append a newley created song to the beginning of the list of songs", () => {

        let originalSongs = [
            {id: 1, name: "song1"},
            {id: 3, name: "song3"}
        ];

        let expectedSongs = [
            {id: 2, name: "song2"},
            {id: 1, name: "song1"},
            {id: 3, name: "song3"}
        ];

        const songDeletedAction = {
            type: SONG_CREATED,
            payload: {id: 2, name: "song2"}
        };

        expect(songsReducer(originalSongs, songDeletedAction)).toEqual(expectedSongs);
    });

    it('should remove a song when a song sucessfully deleted', function () {
        let originalSongs = [
            {id: 1, name: "song1"},
            {id: 2, name: "song2"},
            {id: 3, name: "song3"}
        ];

        let expectedSongs = [
            {id: 1, name: "song1"},
            {id: 3, name: "song3"}
        ];

        const songDeletedAction = {
            type: SONG_DELETED,
            payload: {id: 2, name: "song2", type: "SPOTIFY_SONG"}
        };

        expect(songsReducer(originalSongs, songDeletedAction)).toEqual(expectedSongs);
    });
});