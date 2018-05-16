import {AUTHORIZE_USER, FAIL_LOGIN, LOGIN_ACTION} from "../actions/UserActions";

export const SUBMITTED = "SUBMITTED";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";
export const CLEAN = "CLEAN";

export const loginFormReducer = function (state = CLEAN, action) {
    switch (action.type) {
        case LOGIN_ACTION:
            return SUBMITTED;
        case FAIL_LOGIN:
            return FAILED;
        case AUTHORIZE_USER:
            return SUCCESS
    }
    return state;
};
