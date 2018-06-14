import {CREATE_SONG_ACTION, CREATE_SONG_FAILED, SONG_CREATED} from "../actions/CreateSongAction"
import {CLEAN, FAILED, SUBMITTED, SUCCESS} from "../constants/formStates";

export const newSongReducer = function (state = CLEAN, action) {
    switch (action.type) {
        case CREATE_SONG_ACTION:
            return SUBMITTED;
        case CREATE_SONG_FAILED:
            return FAILED;
        case SONG_CREATED:
            return SUCCESS
    }
    return state;
};

export default newSongReducer