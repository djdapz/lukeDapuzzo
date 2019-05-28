import {all, fork} from 'redux-saga/effects';

import { watchDeleteSong, watchGetSongs} from "./SongSaga";
import {watchDeleteShow, watchGetShows} from "./ShowSaga";
import {watchGetVenues} from "./VenueSaga";
import {watchGetBio, watchSaveBio} from "./BioSaga";

export function* lukeSaga() {
    yield all([
        fork(watchGetSongs),
        fork(watchGetShows),
        fork(watchGetBio),
        fork(watchDeleteSong),
        fork(watchDeleteShow),
        fork(watchGetVenues),
        fork(watchSaveBio)
    ]);
}