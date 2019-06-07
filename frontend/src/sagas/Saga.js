import {all, fork} from 'redux-saga/effects';

import { watchDeleteSong, watchGetSongs} from "./SongSaga";
import {watchGetVenues} from "./VenueSaga";

export function* lukeSaga() {
    yield all([
        fork(watchGetSongs),
        fork(watchDeleteSong),
        fork(watchGetVenues),
    ]);
}