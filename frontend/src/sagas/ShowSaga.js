import {call, put, takeEvery} from "redux-saga/effects"
import {allShowsFetched, GET_ALL_SHOWS} from "../actions/GetAllShows";
import {deleteSecure, getNoCredentials} from "../api/Api";
import {DELETE_SHOW, deleteShowFailed, showDeleted} from "../actions/DeleteShowAction";

export function* watchGetShows() {
    yield takeEvery(GET_ALL_SHOWS, getShows);
}

export function* watchDeleteShow() {
    yield takeEvery(DELETE_SHOW, deleteShowSaga);
}

export function* getShows() {
    try {
        const response = yield call(getNoCredentials, "/shows");
        yield put(allShowsFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}


export function* deleteShowSaga(show) {
    try {
        const response = yield call(deleteSecure, `/shows/${show.payload.id}`);
        if(response.status !== 200) { // noinspection ExceptionCaughtLocallyJS
            throw response;
        }
        yield put(showDeleted(show.payload.id));
    } catch (e) {
        console.error(e);
        yield put(deleteShowFailed(e.status, show.payload.id))
    }
}