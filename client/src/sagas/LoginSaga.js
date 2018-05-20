import {call, put, takeEvery} from "redux-saga/effects"
import {push} from "react-router-redux/actions"
import {postNoCredentials} from "../api/Api";
import {authorizeUser, failLogin, LOGIN_ACTION} from "../actions/UserActions";

export function* watchLogin() {
    yield takeEvery(LOGIN_ACTION, login);
}

export function* login(loginAction) {
    try{
        const response = yield call(postNoCredentials, "/login", loginAction.payload.credentials);
        yield put(authorizeUser(response.data));
        yield put(push(loginAction.payload.target))
    }catch (e) {
        yield put(failLogin())
    }
}