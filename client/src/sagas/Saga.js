import {fork} from 'redux-saga/effects';

import {watchLogin} from './LoginSaga';

export function* lukeSaga() {
    yield [
        fork(watchLogin)
    ];
}