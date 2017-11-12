import {Redirect, Route, Switch} from 'react-router-dom'
import React, {Component} from 'react';

import ShowPage from "./ShowsPage/ShowPageComponent";
import HomePage from "./HomePage/HomePageComponent";
import MusicPage from "./MusicPage/MusicPageCompnent";
import BioPage from "./BioPage/BioPageComponent";
import ContactPage from "./ContactPage/ContactPageComponent";
import MediaPage from "./MediaPage/MediaPageComponent";
import AdminPage from "./AdminPage/AdminPageComponent";

import routes from "../constants/routes"


class RouterComponent extends Component{
    render(){
        return(
            <Switch>
                <Route exact path={routes.HOME.href} component={HomePage}/>
                <Route path={routes.SHOWS.href} component={ShowPage}/>
                <Route path={routes.MUSIC.href} component={MusicPage}/>
                <Route path={routes.BIO.href} component={BioPage}/>
                <Route path={routes.CONTACT.href} component={ContactPage}/>
                <Route path={routes.MEDIA.href} component={MediaPage}/>
                <Route path={routes.ADMIN.href} component={AdminPage}/>
                <Redirect from="*" to={routes.HOME.href}/>
            </Switch>
        )

    }
}


export default RouterComponent;