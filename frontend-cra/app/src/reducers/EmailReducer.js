import {SEND_EMAIL_ACTION} from "../actions/SendEmailAction"

let emailReducer = (state =[], action) =>{
    if(action.type === SEND_EMAIL_ACTION){
        return action.payload;
    }

    return state;
};

export default emailReducer;