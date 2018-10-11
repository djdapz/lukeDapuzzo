import {ALL_SHOWS_FETCHED, allShowsFetched, GET_ALL_SHOWS, getAllShows} from "../GetAllShows";

describe("Get all shows acton", () => {
    describe("GET_ALL_SHOWS", () => {
        it('should return an action with type GET_ALL_SHOWS', function () {
            const allShows = getAllShows([]);

            expect(allShows.type).toEqual(GET_ALL_SHOWS)
        });

        it('should have an empty payload shows passsed to it', function () {
            const allShows = getAllShows("stuff");

            expect(allShows.payload).toEqual({})
        });
    });

    describe("ALL_SHOWS_FETCHED", () => {
        it('should return an action with type GET_ALL_SHOWS', function () {
            const allShows = allShowsFetched([]);

            expect(allShows.type).toEqual(ALL_SHOWS_FETCHED)
        });

        it('should have an empty payload shows passsed to it', function () {
            let shows = [1, 2];
            const allShows = allShowsFetched(shows);

            expect(allShows.payload).toEqual(shows)
        });
    })
});