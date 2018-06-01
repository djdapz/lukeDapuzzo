import {ALL_SONGS_FETCHED} from "../actions/GetAllSongs";
import {SONG_CREATED} from "../actions/CreateSongAction";

const songsReducer = (state =[], action) =>{


    if(action.type === ALL_SONGS_FETCHED){
        return action.payload;
    }

    if(action.type === SONG_CREATED){
        return [action.payload, ...state]
    }

    return state;
};

export default songsReducer;