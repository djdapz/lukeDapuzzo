import {call, put, takeEvery} from "redux-saga/effects"
import {getNoCredentials} from "../api/Api";
import {bioFetched, GET_BIO} from "../actions/BioActions";

export function* watchGetBio() {
    yield takeEvery(GET_BIO, getBio);
}

export function* getBio() {
    try {
        const response = yield call(getNoCredentials, "/bio");
        yield put(bioFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}