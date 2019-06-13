import { EDITING_EMAIL, UPDATE_EMAIL_FORM } from "./SendEmailAction"

const emailReducer = (state = EDITING_EMAIL, action) => {
  if (action.type === UPDATE_EMAIL_FORM) {
    return action.payload
  }

  return state
}

export default emailReducer