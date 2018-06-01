import {ALL_SONGS_FETCHED} from "../actions/GetAllSongs";
import {SONG_CREATED} from "../actions/CreateSongAction";
import {SONG_DELETED} from "../actions/DeleteSongAction";

const songsReducer = (state = [], action) => {

    if (action.type === ALL_SONGS_FETCHED) {
        return action.payload;
    }

    if (action.type === SONG_CREATED) {
        return [action.payload, ...state]
    }

    if (action.type === SONG_DELETED) {
        return state.filter(it => it.id !== action.payload.id)
    }

    return state;
};

export default songsReducer;