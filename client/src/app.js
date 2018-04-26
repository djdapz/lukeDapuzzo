import React, {Component} from 'react';
import MenubarComponent from "./components/Navigation/MenuBarContainer";
import ReactRouter from "./routing/RouterComponent";
import HeaderBar from "./components/Navigation/HeaderBarComponent";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "./constants/constants";

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
                <HeaderBar/>
                {App.renderMenuBarIfNotMobile()}
                <ReactRouter/>
            </div>

        );
    }
}

export default App;