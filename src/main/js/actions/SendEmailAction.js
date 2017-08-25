/**
 * Created by devondapuzzo on 8/24/17.
 */
import axios from "axios";

const SEND_EMAIL_ACTION = "SEND_EMAIL_ACTION";

let sendEmail =  function(emailData){
    let postRequest = axios.post("/api/email",
        {
            email: emailData.email,
            name: emailData.name,
            message: emailData.message
        });

    return {
        type: SEND_EMAIL_ACTION,
        payload: postRequest
    }
};

export {
    sendEmail,
    SEND_EMAIL_ACTION
};