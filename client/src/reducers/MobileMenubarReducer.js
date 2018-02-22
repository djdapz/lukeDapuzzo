import {TOGGLE_MOBILE_MENUBAR_STATE} from "../actions/ToggleMobileMenubarAction";
import {GET_ALL_SHOWS} from "../actions/GetAllShowsAction";

let mobileMenubarReducer = (state = false, action) => {
    if (action.type === TOGGLE_MOBILE_MENUBAR_STATE) {
        return !state
    }

    return state;
};

export default mobileMenubarReducer;