import {CLOSE_MOBILE_MENUBAR, OPEN_MOBILE_MENUBAR} from "../actions/ToggleMobileMenubarActions";

let mobileMenubarReducer = (state = false, action) => {

    if (action.type === OPEN_MOBILE_MENUBAR) {
        return true;
    }
    if (action.type === CLOSE_MOBILE_MENUBAR) {
        return false;
    }

    return state;
};

export default mobileMenubarReducer;