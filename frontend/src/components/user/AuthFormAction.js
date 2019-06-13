import { authorizeUser } from "./UserActions"
import { push } from "connected-react-router"
import { authorizeHttp } from "../../api"
import { declareForm } from "../../FormActions"

export const authForm = declareForm({
    formName: "authForm",
    fields: [
      { name: "username", required: true },
      { name: "password", required: true }
    ],
    path: "/login",
    onSuccess: (dispatch, getState, response) => {
      dispatch(authorizeUser(response))
      authorizeHttp(response.token)
      window.localStorage.setItem("token", response.token)
      dispatch(push("/admin"))
    },
    isInsecure: true,
    errorMessage: "sorry it didnt work "
  }
)