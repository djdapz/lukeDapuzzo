import { http } from "../../api"

export const UPDATE_EMAIL_FORM = "UPDATE_EMAIL_FORM"

export const EDITING_EMAIL = "EDITING_EMAIL"
export const SENDING_EMAIL = "SENDING_EMAIL"
export const EMAIL_SUCCESS = "EMAIL_SUCCESS"
export const EMAIL_ERROR = "EMAIL_ERROR"

export const sendEmail = ({ email, name, message }) => (dispatch) => {
  dispatch(({
    type: UPDATE_EMAIL_FORM,
    payload: SENDING_EMAIL
  }))

  return http
    .post("/api/email", {
      email,
      name,
      message,
    })
    .then(() => dispatch({
      type: UPDATE_EMAIL_FORM,
      payload: EMAIL_SUCCESS
    }))
    .catch(() => dispatch({
      type: UPDATE_EMAIL_FORM,
      payload: EMAIL_ERROR
    }))
}