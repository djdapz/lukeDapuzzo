import {AUTHORIZE_USER, FAIL_LOGIN, LOGIN_ACTION} from "../actions/UserActions";
import {CLEAN, FAILED, SUBMITTED, SUCCESS} from "../constants/formStates";


export const loginFormReducer = function (state = CLEAN, action) {
    switch (action.type) {
        case LOGIN_ACTION:
            return SUBMITTED;
        case FAIL_LOGIN:
            return FAILED;
        case AUTHORIZE_USER:
            return SUCCESS;
        default:
            return state
    }
};
