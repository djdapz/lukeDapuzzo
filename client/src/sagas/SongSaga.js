import {call, put, takeEvery} from "redux-saga/effects"
import {getNoCredentials} from "../api/Api";
import {allSongsFetched, GET_ALL_SONGS} from "../actions/GetAllSongs";

export function* watchGetSongs() {
    yield takeEvery(GET_ALL_SONGS, getSongs);
}

export function* getSongs() {
    try {
        const response = yield call(getNoCredentials, "/songs");
        yield put(allSongsFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}