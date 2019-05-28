import {AUTHORIZE_USER, FAIL_LOGIN} from "../actions/UserActions";

const userAuthenticationReducer = (state = true, action) => {
    if (action.type === AUTHORIZE_USER) {
        return true;
    }

    if (action.type === FAIL_LOGIN) {
        return false;
    }

    return state;
};

export default userAuthenticationReducer