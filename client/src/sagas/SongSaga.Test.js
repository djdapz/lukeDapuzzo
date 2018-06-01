import {call, put} from 'redux-saga/effects';
import {getNoCredentials, postSecure} from '../api/Api';
import {allSongsFetched, GET_ALL_SONGS, getAllSongs} from "../actions/GetAllSongs";
import {createSongSaga, getSongs} from "./SongSaga";
import {CREATE_SONG_ACTION, createSong, createSongFailed, songCreated} from "../actions/CreateSongAction";

describe('Songs saga', () => {
    describe("get all songs ", () => {
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


    describe("create a song", () => {
        it("is a consumer of the get all songs action", () => {
            const createSongContract = {
                payload: {
                    name: "If you left tonight",
                    id: 2523
                },
                type: CREATE_SONG_ACTION
            };

            expect(createSongContract).toEqual(createSong({name: "If you left tonight", id: 2523}));
        });

        it('calls songs api and dispatches a all songs fetched action', () => {
            const song = {
                name: "chump change",
                id: 1234
            };

            const iterator = createSongSaga(createSong(song));

            const firstStep = iterator.next();

            expect(firstStep.value).toEqual(call(postSecure, `/songs`, song));

            const responseSong = {
                name: "actually the same song",
                id: 4321
            };
            const secondStep = iterator.next({
                data: responseSong
            });

            expect(secondStep.value).toEqual(put(songCreated(responseSong)));
        });

        it('should dispatch a CREATE_SONG_FAILED action on failure', function () {
            const song = {
                name: "chump change",
                id: 1234
            };

            const iterator = createSongSaga(createSong(song));

            const firstStep = iterator.next();

            expect(firstStep.value).toEqual(call(postSecure, `/songs`, song));

            const secondStep = iterator.next({
                status: 404
            });

            expect(secondStep.value).toEqual(put(createSongFailed({status: 404})));
        });
    })

});