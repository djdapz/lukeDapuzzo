import {call, put, takeEvery} from "redux-saga/effects"
import {getNoCredentials, putSecure} from "../api/Api";
import {bioFetched, GET_BIO, getBio, SAVE_BIO} from "../actions/BioActions";

export function* watchGetBio() {
    yield takeEvery(GET_BIO, fetchBio);
}

export function* watchSaveBio() {
    yield takeEvery(SAVE_BIO, saveBio);
}

export function* fetchBio() {
    try {
        const response = yield call(getNoCredentials, "/bio");
        yield put(bioFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}

export function* saveBio(bioAction) {
    try {
        yield call(putSecure, "/bio", {bio: bioAction.payload.bio});
        yield put(getBio());
    } catch (e) {
        console.error(e)
    }
}