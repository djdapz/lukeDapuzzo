/**
 * Created by devondapuzzo on 8/24/17.
 */
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import FontAwesomeIcon from "@fortawesome/react-fontawesome/index.es"
import TextField from "@material-ui/core/TextField/TextField"
import Button from "@material-ui/core/Button/Button"
import {
  EDITING_EMAIL,
  EMAIL_ERROR,
  EMAIL_SUCCESS,
  sendEmail,
  SENDING_EMAIL,
  UPDATE_EMAIL_FORM
} from "./SendEmailAction"

const ResetFormButton = ({ children }) => {
  const dispatch = useDispatch()
  const sendAnother = () => dispatch({ type: UPDATE_EMAIL_FORM, payload: EDITING_EMAIL })
  return <button className="btn" onClick={sendAnother}>
    {children}
  </button>
}

const EmailSuccess = () =>
  <div>
    <h1>
      Email Sent!
    </h1>
    <hr/>
    <ResetFormButton>
      Send Another?
    </ResetFormButton>
  </div>

const EmailError = () =>
  <div>
    <h1>
      Sorry, there was a problem sending your email.
    </h1>
    <hr/>
    <ResetFormButton>
      Try Again?
    </ResetFormButton>
  </div>

const SendingEmail = () =>
  <div>
    <h1>
      Sending Email
    </h1>
    <hr/>
    <span>
      <FontAwesomeIcon icon={["fa", "spinner"]} pulse size={"2x"}/>
    </span>
  </div>

const EmailForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState({
    email: "",
    message: "",
    name: ""
  })

  const isValid = (email.message.length > 0)
    && (email.message.length > 0)
    && (email.name.length > 0)

  const send = () => {
    dispatch(sendEmail(email))
    setEmail({
      email: "",
      message: "",
      name: ""
    })
  }
  return <div id="contact-form" className="form-group">
    <TextField
      className={"name"}
      id={`name-contact-form`}
      label="Your Name"
      value={email.name}
      margin="normal"
      variant="outlined"
      onChange={(event => setEmail({ ...email, name: event.target.value }))}
    />
    <TextField
      className={"email"}
      id={`email-contact-form`}
      label="Your Email"
      type={"email"}
      value={email.email}
      margin="normal"
      variant="outlined"
      onChange={(event => setEmail({ ...email, email: event.target.value }))}
    />
    <TextField
      className={"message"}
      id={`message-contact-form`}
      onChange={(event => setEmail({ ...email, message: event.target.value }))}
      value={email.message}
      label="Your Message"
      multiline
      rows="10"
      margin="normal"
      variant="outlined"
    />
    <Button disabled={!isValid} id="submit-contact-form" variant="contained" color="primary" onClick={send}>Send It</Button>
  </div>
}

export default () => {
  const status = useSelector(state => state.email)

  switch (status) {
    case(SENDING_EMAIL) :
      return <div className={"form-messaging"}><SendingEmail/></div>
    case(EMAIL_SUCCESS) :
      return <div className={"form-messaging"}><EmailSuccess/></div>
    case(EMAIL_ERROR) :
      return <div className={"form-messaging"}><EmailError/></div>
    default:
      return <EmailForm/>
  }
}