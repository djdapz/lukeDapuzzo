import {ALL_SONGS_FETCHED, allSongsFetched, GET_ALL_SONGS, getAllSongs} from "../GetAllSongs";

describe("Get all SONGS acton", () => {
    describe("GET_ALL_SONGS", () => {
        it('should return an action with type GET_ALL_SONGS', function () {
            const allSongs = getAllSongs([]);

            expect(allSongs.type).toEqual(GET_ALL_SONGS)
        });

        it('should have an empty payload shows passsed to it', function () {
            const allSongs = getAllSongs("stuff");

            expect(allSongs.payload).toEqual({})
        });
    });

    describe("ALL_SONGS_FETCHED", () => {
        it('should return an action with type GET_ALL_SHOWS', function () {
            const allSongs = allSongsFetched([]);

            expect(allSongs.type).toEqual(ALL_SONGS_FETCHED)
        });

        it('should have an empty payload shows passsed to it', function () {
            let shows = [1, 2];
            const allSongs = allSongsFetched(shows);

            expect(allSongs.payload).toEqual(shows)
        });
    })

});