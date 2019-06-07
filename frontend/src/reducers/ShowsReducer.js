import {Show} from "../classes/Show";
import { ALL_SHOWS_FETCHED, SHOW_DELETED } from "../actions/ShowActions"

const showsReducer = (state = [], action) => {
    switch (action.type) {
        case(ALL_SHOWS_FETCHED):
            return action.payload.map(show => Show.fromJson(show));
        case(SHOW_DELETED) :
            return state.filter(show => show.id !== action.payload.id);
        default:
            return state;
    }
};

export default showsReducer;