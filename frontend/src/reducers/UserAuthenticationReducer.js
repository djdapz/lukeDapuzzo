import {AUTHORIZE_USER, FAIL_LOGIN} from "../actions/UserActions";

const userAuthenticationReducer = (state = false, action) => {
    if (action.type === AUTHORIZE_USER) {
        return true;
    }

    if (action.type === FAIL_LOGIN) {
        return false;
    }

    return state;
    // return true;
};

export default userAuthenticationReducer