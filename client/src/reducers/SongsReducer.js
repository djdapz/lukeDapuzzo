import {ALL_SONGS_FETCHED} from "../actions/GetAllSongs";

const songsReducer = (state =[], action) =>{
    if(action.type === ALL_SONGS_FETCHED){
        return action.payload;
    }

    return state;
};

export default songsReducer;