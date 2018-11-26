import {call, put, takeEvery, select} from "redux-saga/effects"
import {deleteSecure, getNoCredentials, postSecure} from "../api/Api";
import {allSongsFetched, GET_ALL_SONGS} from "../actions/GetAllSongs";
import {CREATE_SONG_ACTION, createSongFailed, songCreated} from "../actions/CreateSongAction";
import {DELETE_SONG, deleteSongFailed, songDeleted} from "../actions/DeleteSongAction";

export function* watchGetSongs() {
    yield takeEvery(GET_ALL_SONGS, getSongs);
}

export function* watchCreateSong() {
    yield takeEvery(CREATE_SONG_ACTION, createSongSaga);
}

export function* watchDeleteSong() {
    yield takeEvery(DELETE_SONG, deleteSongSaga);
}


export function* getSongs() {
    try {
        const response = yield call(getNoCredentials, "/music");
        yield put(allSongsFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}

const getSongForm = (state) => {
    return state.newSong;
}

export function* createSongSaga() {
    try {
        const song = yield select(getSongForm);
        const response = yield call(postSecure, "/music", song);
        if (response.status !== 200) { // noinspection ExceptionCaughtLocallyJS
            throw response;
        }
        yield put(songCreated(response.data));
    } catch (e) {
        console.error(e);
        yield put(createSongFailed(e))
    }
}

export function* deleteSongSaga(song) {
    try {
        console.log(song);
        const response = yield call(deleteSecure, `/music/${song.payload.id}`);
        if (response.status !== 200) { // noinspection ExceptionCaughtLocallyJS
            throw response;
        }
        yield put(songDeleted(song.payload.id, song.payload.type));
    } catch (e) {
        console.error(e);
        yield put(deleteSongFailed(e.status, song.payload.id))
    }
}