/**
 * Created by devondapuzzo on 9/22/17.
 */
import {ALL_SHOWS_FETCHED} from "../actions/GetAllShows";
import {Show} from "../classes/Show";
import {SHOW_DELETED} from "../actions/DeleteShowAction";

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