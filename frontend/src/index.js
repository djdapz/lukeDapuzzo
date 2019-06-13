import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"


import App from "./App/app"
import { history, store } from "./App/reduxConfig"

import { createMuiTheme } from "@material-ui/core/styles"
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#62f7c8",
    }
  },
})
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <App/>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById("root"))
