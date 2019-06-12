import { declareForm } from "./FormActions"
import { authorizeUser } from "./UserActions"
import { push } from "connected-react-router"
import api from "../api/Api"

export const authForm = declareForm({
        formName: "authForm",
        fields: [
            {name: "username", required: true},
            {name: "password", required: true}
        ],
        path: "/login",
        onSuccess: (dispatch, getState, response) => {
            dispatch(authorizeUser(response));
            api.authorizeAxiosInstance(response.token)
            window.localStorage.setItem("token", response.token);
            dispatch(push("/admin"));
        },
        isInsecure: true,
        errorMessage: "sorry it didnt work "
    }
);