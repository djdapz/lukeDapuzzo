import { AUTHORIZE_USER } from "./UserActions"

const userAuthenticationReducer = (state = false, action) => {
    if (action.type === AUTHORIZE_USER) {
        return true;
    }

    return state;
};

export default userAuthenticationReducer