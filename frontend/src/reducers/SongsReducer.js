import {ALL_SONGS_FETCHED} from "../actions/GetAllSongs";
import {SONG_CREATED} from "../actions/CreateSongAction";
import {SONG_DELETED} from "../actions/DeleteSongAction";
import {musicTypes} from "../constants/musicTypes";

const songsReducer = (state = [], action) => {

    if (action.type === ALL_SONGS_FETCHED) {
        return action.payload;
    }


    if (action.type === SONG_CREATED) {
        let createdMusicType = action.payload.type;
        let newState = {};

        musicTypes
            .forEach(type => {
                if(type.api === createdMusicType){
                    if(state[type.api]){
                        newState[type.api] = [{"id": action.payload.id, "name": action.payload.name}, ...state[createdMusicType]];
                    }else{
                        newState[type.api] = [{"id": action.payload.id, "name": action.payload.name}];
                    }
                } else {
                    newState[type.api] = state[type.api]
                }
            });

        return newState;
    }

    if (action.type === SONG_DELETED) {
        let deletedMusicType = action.payload.type;
        let newState = {};

        musicTypes
            .filter(type => state[type.api] !== undefined)
            .forEach(type => {
                if (type.api !== deletedMusicType) {
                    newState[type.api] = state[type.api]
                }
                newState[type.api] = state[type.api].filter(it => it.id !== action.payload.id)
            });

        return newState
    }

    return state;
};

export default songsReducer;