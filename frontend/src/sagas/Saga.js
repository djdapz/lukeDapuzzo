import {all, fork} from 'redux-saga/effects';

import {watchLogin} from './LoginSaga';
import { watchDeleteSong, watchGetSongs} from "./SongSaga";
import {watchDeleteShow, watchGetShows} from "./ShowSaga";
import {watchGetVenues} from "./VenueSaga";

export function* lukeSaga() {
    yield all([
        fork(watchLogin),
        fork(watchGetSongs),
        fork(watchGetShows),
        fork(watchDeleteSong),
        fork(watchDeleteShow),
        fork(watchGetVenues)
    ]);
}