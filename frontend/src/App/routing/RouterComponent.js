import React from "react"
import { Redirect, Route, Switch } from "react-router"

import { AdminPage, HomePage } from "../../components"
import { ShowPage } from "../../components/shows"
import { MusicPage } from "../../components/music"
import { BioPage } from "../../components/bio"
import { ContactPage } from "../../components/contact"
import { LoginPage } from "../../components/user"

import routes from "../../constants/routes"
import PrivateRoute from "./PrivateRoute"

export default () => <Switch>
  <Route exact path={routes.HOME.href} component={HomePage}/>
  <Route path={routes.SHOWS.href} component={ShowPage}/>
  <Route path={routes.MUSIC.href} component={MusicPage}/>
  <Route path={routes.BIO.href} component={BioPage}/>
  <Route path={routes.CONTACT.href} component={ContactPage}/>
  <Route path={routes.LOGIN.href} component={LoginPage}/>
  <PrivateRoute path={routes.ADMIN.href} component={AdminPage}/>
  <Redirect from="*" to={routes.HOME.href}/>
</Switch>