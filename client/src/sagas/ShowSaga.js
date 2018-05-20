import {call, put, takeEvery} from "redux-saga/effects"
import {allShowsFetched, GET_ALL_SHOWS} from "../actions/GetAllShows";
import {getNoCredentials} from "../api/Api";

export function* watchGetShows() {
    yield takeEvery(GET_ALL_SHOWS, getShows);
}

export function* getShows() {
    try {
        const response = yield call(getNoCredentials, "/shows");
        yield put(allShowsFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}