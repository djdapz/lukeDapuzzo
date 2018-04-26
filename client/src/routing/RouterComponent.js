import {Redirect, Route, Switch} from 'react-router-dom'
import React, {Component} from 'react';

import ShowPage from "../components/ShowsPage/ShowPageComponent";
import HomePage from "../components/HomePage/HomePageComponent";
import MusicPage from "../components/MusicPage/MusicPageComponent";
import BioPage from "../components/BioPage/BioPageComponent";
import ContactPage from "../components/ContactPage/ContactPageComponent";
import AdminPage from "../components/AdminPage/AdminPageComponent";

import routes from "../constants/routes"
import LoginPage from "../components/Navigation/LoginPage";
import PrivateRoute from "./PrivateRoute";


class RouterComponent extends Component{
    render(){
        return(
            <Switch>
                <Route exact path={routes.HOME.href} component={HomePage}/>
                <Route path={routes.SHOWS.href} component={ShowPage}/>
                <Route path={routes.MUSIC.href} component={MusicPage}/>
                <Route path={routes.BIO.href} component={BioPage}/>
                <Route path={routes.CONTACT.href} component={ContactPage}/>
                <Route path={routes.LOGIN.href} component={LoginPage}/>
                <PrivateRoute path={routes.ADMIN.href} component={AdminPage}/>
                <Redirect from="*" to={routes.HOME.href}/>
            </Switch>
        )

    }
}


export default RouterComponent;