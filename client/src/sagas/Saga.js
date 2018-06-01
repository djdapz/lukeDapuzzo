import {all, fork} from 'redux-saga/effects';

import {watchLogin} from './LoginSaga';
import {watchCreateSong, watchGetSongs} from "./SongSaga";
import {watchGetShows} from "./ShowSaga";

export function* lukeSaga() {
    yield all([
        fork(watchLogin),
        fork(watchGetSongs),
        fork(watchGetShows),
        fork(watchCreateSong)
    ]);
}