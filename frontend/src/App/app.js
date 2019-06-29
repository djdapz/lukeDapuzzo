import React, { Component } from "react"
import { HeaderBar } from "../components/navigation"
import { Router } from "./routing"
import "./app.scss"
import ReactGA from "react-ga"

import fontawesome from "@fortawesome/fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import solid from "@fortawesome/fontawesome-free-solid"
import { GOOGLE_ANALYTICS_ID } from "../appConfig"
import Analytics from "../Analytics"

fontawesome.library.add(brands, solid)

ReactGA.initialize(GOOGLE_ANALYTICS_ID)

export default () => <div id="app">
  <Analytics/>
  <HeaderBar/>
  <Router/>
</div>