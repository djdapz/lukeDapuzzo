import React, {Component} from 'react';
import MenubarComponent from "./components/Navigation/MenuBarContainer";
import ReactRouter from "./routing/RouterComponent";
import HeaderBar from "./components/Navigation/HeaderBarComponent";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "./constants/constants";

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import routes from "./constants/routes";

fontawesome.library.add(brands, solid);

class App extends Component {
    static renderMenuBarIfNotMobile() {
        return (
            <MediaQuery minWidth={mobileCutoff}>
                <MenubarComponent menubarPosition="menubar-side" routes={routes}/>
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