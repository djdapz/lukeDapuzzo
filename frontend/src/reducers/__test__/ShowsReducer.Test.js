import showsReducer from "../ShowsReducer";

import React from "react"

import {allShowsFetched} from "../../actions/GetAllShows";
import {stubbedShows} from "../../../testConfig/testUtils";
import {Show} from "../../classes/Show";
import {showDeleted} from "../../actions/DeleteShowAction";

describe("Shows Reducer",() => {
    it("should add all shows on fetch", () => {
        const reducedShows = showsReducer([], allShowsFetched(stubbedShows));

        expect(reducedShows).toContainEqual(Show.fromJson(stubbedShows[1]));
        expect(reducedShows).toContainEqual(Show.fromJson(stubbedShows[0]));

        expect(reducedShows.length).toEqual(2)

    });

    it('should remove show on delete', () => {
        const shows = [
            Show.fromJson(stubbedShows[0]),
            Show.fromJson(stubbedShows[1])
        ];

        const reducedShows = showsReducer(shows, showDeleted(stubbedShows[0].id));

        expect(reducedShows.length).toEqual(1);

        expect(reducedShows).toContainEqual(Show.fromJson(stubbedShows[1]));
    });
});