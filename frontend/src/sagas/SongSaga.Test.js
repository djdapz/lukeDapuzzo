import {call, put} from 'redux-saga/effects';
import {deleteSecure, getNoCredentials, postSecure} from '../api/Api';
import {allSongsFetched, GET_ALL_SONGS, getAllSongs} from "../actions/GetAllSongs";
import {createSongSaga, deleteSongSaga, getSongs} from "./SongSaga";
import {CREATE_SONG_ACTION, createSong, createSongFailed, songCreated} from "../actions/CreateSongAction";
import {DELETE_SONG, deleteSong, deleteSongFailed, songDeleted} from "../actions/DeleteSongAction";

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
                data: responseSong,
                status: 200
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
    });

    describe("delete a song", () => {
        it("is a consumer of the delete song action", () => {
            const createSongContract = {
                payload: {
                    id: 2523
                },
                type: DELETE_SONG
            };

            expect(createSongContract).toEqual(deleteSong(2523));
        });

        it('calls songs api and dispatches a song deleted', () => {
            const iterator = deleteSongSaga(deleteSong(1234));

            const firstStep = iterator.next();

            expect(firstStep.value).toEqual(call(deleteSecure, `/songs/1234`));

            const secondStep = iterator.next({
                status: 200
            });

            expect(secondStep.value).toEqual(put(songDeleted(1234)));
        });

        it('should dispatch a CREATE_SONG_FAILED action on failure', function () {
            const iterator = deleteSongSaga(deleteSong(1234));

            iterator.next();

            const secondStep = iterator.next({
                status: 500
            });

            expect(secondStep.value).toEqual(put(deleteSongFailed(500, 1234)));
        });
    })

});