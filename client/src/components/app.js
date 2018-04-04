import React, {Component} from 'react';
import MenubarComponent from "./Navigation/MenuBarContainer";
import ReactRouter from "./RouterComponent";
import HeaderBar from "./Navigation/HeaderBarComponent";
import Dependencies from "./DependenciesComponent";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../constants/constants";

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, solid);

class App extends Component {
    static renderMenuBarIfNotMobile() {
        return (
            <MediaQuery minWidth={mobileCutoff}>
                <MenubarComponent menubarPosition="menubar-side"/>
            </MediaQuery>
        )
    }

    render() {
        return (
            <div id="app">
                <Dependencies/>
                <HeaderBar/>
                {App.renderMenuBarIfNotMobile()}
                <ReactRouter/>
            </div>

        );
    }
}

export default App;