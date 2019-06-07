import Api from "../api/Api"

const SEND_EMAIL_ACTION = "SEND_EMAIL_ACTION"

let sendEmail = ({ email, name, message }) => (dispatch) => Api
  .post("/api/email", {
    email,
    name,
    message,
  })
  .then(() => dispatch({
    type: SEND_EMAIL_ACTION,
    payload: { email, name, message }
  }))

export {
  sendEmail,
  SEND_EMAIL_ACTION
}