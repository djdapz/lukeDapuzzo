import {declareForm} from "./FormActions";
import {getAllSongs} from "./GetAllSongs";
import {authorizeUser, loginAction} from "./UserActions";
import {push} from "react-router-redux/actions";

export const authForm = declareForm({
        formName: "authForm",
        fields: [
            {name: "username", required: true},
            {name: "password", required: true}
        ],
        path: "/login",
        onSuccess: (dispatch, getState, response) => {
            const {username, password} = getState().authForm;
            dispatch(loginAction(username, password));
            dispatch(authorizeUser(response));
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("password", password);
            dispatch(push("/admin"));
        },
        isInsecure: true,
        errorMessage: "sorry it didnt work "
    }
);