import {call, put, takeEvery} from "redux-saga/effects"
import Api from "../api/Api";
import {allVenuesFetched, GET_ALL_VENUES} from "../actions/VenueActions";

export function* watchGetVenues() {
    yield takeEvery(GET_ALL_VENUES, getVenues);
}

export function* getVenues() {
    try {
        const response = yield call(Api.get, "/venues");
        yield put(allVenuesFetched(response.data));
    } catch (e) {
        console.error(e)
    }
}