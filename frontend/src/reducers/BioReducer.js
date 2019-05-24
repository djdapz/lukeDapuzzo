import {BIO_FETCHED} from "../actions/BioActions";

export const bioReducer = (state = [], action) => {
    if (action.type === BIO_FETCHED) {
        return action.payload.bio
    }
    return state
};