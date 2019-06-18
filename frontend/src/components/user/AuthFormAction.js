import { push } from "connected-react-router"
import { authorizeHttp, http } from "../../api"
import { LUKE_API } from "../../appConfig"
import { authorizeUser } from "./UserActions"

export const login = ({ password, username, onError }) =>
  dispatch => http
    .post(`${LUKE_API}/login`, { password, username })
    .then(response => {
      const token = response.data.token
      authorizeHttp(token)
      window.localStorage.setItem("token", token)
    })
    .then(() => dispatch(authorizeUser()))
    .then(() => dispatch(push("/admin")))
    .catch(() => onError("Sorry, we were unable to log you in."))