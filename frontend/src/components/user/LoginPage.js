import React, { useState } from "react"
import Button from "@material-ui/core/Button/Button"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { createMuiTheme } from "@material-ui/core/styles"
import { login } from "./AuthFormAction"
import { LukeTextField } from "../reusable"
import "./login.scss"
import { useDispatch } from "react-redux"
import { doOnEnter } from "../../helpers"

const LoginPage = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const submitForm = () => dispatch(login({ username, password, onError: setError }))

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#62f7c8",
      },
    },
  })

  const listenForSubmit = doOnEnter(submitForm)

  return (
    <div className="main-content">
      <div id={"login-window"}>
        <h2>Login</h2>
        {error && <p id={"user-alert"}>{error}</p>}
        <MuiThemeProvider theme={theme}>
          <LukeTextField label={"Username"}
                         id={"username"}
                         type={"text"}
                         value={username}
                         onChange={setUsername}
                         onKeyUp={listenForSubmit}
                         variant="outlined"/>
          <LukeTextField label={"Password"}
                         type={"password"}
                         id={"password"}
                         value={password}
                         onChange={setPassword}
                         onKeyUp={listenForSubmit}
                         variant="outlined"/>
          <Button className="btn btn-outline-primary float-none"
                  variant="outlined"
                  color="primary"
                  id={"login-button"}
                  onClick={submitForm}>Send it!</Button>
        </MuiThemeProvider>
      </div>
    </div>
  )
}

export default LoginPage