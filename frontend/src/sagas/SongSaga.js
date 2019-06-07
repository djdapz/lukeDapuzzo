import {call, put, takeEvery} from "redux-saga/effects"
import {allSongsFetched, GET_ALL_SONGS} from "../actions/GetAllSongs";
import {DELETE_SONG, deleteSongFailed, songDeleted} from "../actions/DeleteSongAction";
import Api from "../api/Api"

export function* watchGetSongs() {
    yield takeEvery(GET_ALL_SONGS, getSongs);
}


export function* watchDeleteSong() {
    yield takeEvery(DELETE_SONG, deleteSongSaga);
}


export function* getSongs() {
    try {
        const response = yield call(Api.get, "/music");
        yield put(allSongsFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}

export function* deleteSongSaga(song) {
    try {
        const response = yield call(Api.delete, `/music/${song.payload.id}`);
        if (response.status !== 200) { // noinspection ExceptionCaughtLocallyJS
            throw response;
        }
        yield put(songDeleted(song.payload.id, song.payload.type));
    } catch (e) {
        console.error(e);
        yield put(deleteSongFailed(e.status, song.payload.id))
    }
}