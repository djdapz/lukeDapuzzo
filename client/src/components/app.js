import React, {Component} from 'react';
import MenubarComponent from "./Multipurpose/MenuBarContainer";
import MainContent from "./RouterComponent";
import HeaderBar from "./Multipurpose/HeaderBarComponent";
import MediaQuery from "react-responsive";

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <HeaderBar/>
                <MediaQuery query="(min-device-width: 768px)">
                    <MenubarComponent menubarPosition = "menubar-side"/>
                </MediaQuery>
                <MainContent/>
            </div>

        );
    }
}
