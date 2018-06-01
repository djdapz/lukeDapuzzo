import {call, put, takeEvery} from "redux-saga/effects"
import {getNoCredentials, postSecure} from "../api/Api";
import {allSongsFetched, GET_ALL_SONGS} from "../actions/GetAllSongs";
import {CREATE_SONG_ACTION, createSongFailed, songCreated} from "../actions/CreateSongAction";

export function* watchGetSongs() {
    yield takeEvery(GET_ALL_SONGS, getSongs);
}

export function* watchCreateSong() {
    yield takeEvery(CREATE_SONG_ACTION, createSongSaga);
}

export function* getSongs() {
    try {
        const response = yield call(getNoCredentials, "/songs");
        yield put(allSongsFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}

export function* createSongSaga(song) {
    try {
        const response = yield call(postSecure, "/songs", song.payload);
        if(response.status !== 200) throw response;
        yield put(songCreated(response.data));
    } catch (e) {
        console.error(e);
        yield put(createSongFailed(e))
    }
}