import {TOGGLE_USER_AUTHENTICATION} from "../actions/ToggleUserAuthenitcation";

const userAuthenticationReducer = (state = true, action) => {
    if (action.type === TOGGLE_USER_AUTHENTICATION) {
        return !state;
    }

    return state;
};

export default userAuthenticationReducer