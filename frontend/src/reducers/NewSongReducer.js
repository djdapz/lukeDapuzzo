import {
    CREATE_SONG_ACTION,
    CREATE_SONG_FAILED,
    SONG_CREATED,
    SONG_FORM_CHANGE_ID,
    SONG_FORM_CHANGE_NAME, SONG_FORM_CHANGE_TYPE
} from "../actions/CreateSongAction"
import {CLEAN, FAILED, SUBMITTED} from "../constants/formStates";

export const newSongReducer = function (state = {
    id: undefined,
    name: undefined,
    type: undefined,
    status: CLEAN
}, action) {
    switch (action.type) {
        case CREATE_SONG_ACTION:
            return {...state, status: SUBMITTED};
        case CREATE_SONG_FAILED:
            return {...state, status: FAILED};
        case SONG_CREATED:
            return {id: undefined, name: undefined, type: undefined, status: CLEAN};
        case SONG_FORM_CHANGE_ID:
            return {...state, id: action.payload};
        case SONG_FORM_CHANGE_NAME:
            return {...state, name: action.payload};
        case SONG_FORM_CHANGE_TYPE:
            return {...state, type: action.payload};
        default:
            return state;
    }
};

export default newSongReducer