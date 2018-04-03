import React, {Component} from 'react';
import MenubarComponent from "./Navigation/MenuBarContainer";
import ReactRouter from "./RouterComponent";
import HeaderBar from "./Navigation/HeaderBarComponent";
import Dependencies from "./DependenciesComponent";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../constants/constants";
import 'bootstrap/dist/css/bootstrap.min.css';

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