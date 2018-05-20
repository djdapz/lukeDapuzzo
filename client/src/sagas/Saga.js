import {fork} from 'redux-saga/effects';

import {watchLogin} from './LoginSaga';
import {watchGetSongs} from "./SongSaga";

export function* lukeSaga() {
    yield [
        fork(watchLogin),
        fork(watchGetSongs)
    ];
}