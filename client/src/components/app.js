import React, {Component} from 'react';
import MenubarComponent from "./Navigation/MenuBarContainer";
import ReactRouter from "./RouterComponent";
import HeaderBar from "./Navigation/HeaderBarComponent";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../constants/constants";

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