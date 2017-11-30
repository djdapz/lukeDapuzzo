import {NEW_SONG_ACTION} from "../actions/CreateSongAction"
import {CLEAR_NEW_SONG} from "../actions/ClearNewSongAction";

let newSongReducer = (state =[], action) =>{
    if(action.type === NEW_SONG_ACTION){
        return action.payload;
    }else if(action.type === CLEAR_NEW_SONG){
        return []
    }

    return state;
};

export default newSongReducer