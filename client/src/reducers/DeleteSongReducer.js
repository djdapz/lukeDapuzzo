import {CLEAR_DELETE_SONG, DELETE_SONG} from "../actions/DeleteSongAction";

let deleteSongReducer = (state =[], action) =>{
    if(action.type === DELETE_SONG){
        return action.payload;
    }else if(action.type === CLEAR_DELETE_SONG){
        return []
    }

    return state;
};

export default deleteSongReducer