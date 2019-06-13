import { ALL_SONGS_FETCHED, SONG_DELETED } from "./SongActions"

const songsReducer = (state = [], action) => {

    switch (action.type) {
        case(ALL_SONGS_FETCHED):
            return action.payload.reverse();
        case(SONG_DELETED) :
            return state.filter(it => it.id !== action.payload.id);
        default:
            return state
    }
};

export default songsReducer;