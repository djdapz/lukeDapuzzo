import {IS_MOBILE} from "../actions/IsMobileAction";

let isMobileReducer = (state = false, action) => {

    if (action.type === IS_MOBILE) {
        return action.payload
    }
    return state;
};

export default isMobileReducer;