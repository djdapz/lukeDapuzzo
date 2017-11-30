import {GET_ALL_SONGS} from "../actions/GetAllSongsAction"

const songsReducer = (state =[], action) =>{
    if(action.type === GET_ALL_SONGS){
        return action.payload.data;
    }

    return state;
};

export default songsReducer;