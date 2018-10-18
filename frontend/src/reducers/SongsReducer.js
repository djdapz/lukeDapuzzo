import {ALL_SONGS_FETCHED} from "../actions/GetAllSongs";
import {SONG_CREATED} from "../actions/CreateSongAction";
import {SONG_DELETED} from "../actions/DeleteSongAction";

const songsReducer = (state = [], action) => {

    switch (action.type) {
        case(ALL_SONGS_FETCHED):
            return action.payload;

        case(SONG_CREATED) :
            return [action.payload, ...state];

        case(SONG_DELETED) :
            return state.filter(it => it.id !== action.payload.id);

        default:
            return state
    }
};

export default songsReducer;