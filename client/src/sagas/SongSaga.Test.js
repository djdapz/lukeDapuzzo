import {call, put} from 'redux-saga/effects';
import {getNoCredentials} from '../api/Api';
import {allSongsFetched, GET_ALL_SONGS, getAllSongs} from "../actions/GetAllSongs";
import {getSongs} from "./SongSaga";

describe('Songs saga', () => {
    it("is a consumer of the get all songs action", () => {
        const loginActionContract = {
            payload: {},
            type: GET_ALL_SONGS
        };

        expect(loginActionContract).toEqual(getAllSongs());
    });

    it('calls songs api and dispatches a all songs fetched action', () => {
        const iterator = getSongs(getAllSongs());

        const firstStep = iterator.next();

        expect(firstStep.value).toEqual(call(getNoCredentials, `/songs`));

        const songs = [
            {
                name: "if you left tonight"
            },
            {
                name: "would it ever be the same"
            }
        ];
        const secondStep = iterator.next({
            data: songs
        });

        expect(secondStep.value).toEqual(put(allSongsFetched(songs)));
    });
});