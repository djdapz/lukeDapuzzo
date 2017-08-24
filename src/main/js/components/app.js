import React, { Component } from 'react';
import MenubarComponent from "./Multipurpose/MenuBarContainer";
import SocialMediaBar from "./Multipurpose/SocialMediaBar";
import MainContent from "./RouterComponent";
import HeaderBar from "./Multipurpose/HeaderBarComponent";

export default class App extends Component {
  render() {
    return (
        <div id="app">
            <HeaderBar/>
            <MenubarComponent/>
            <MainContent/>
            <SocialMediaBar/>
        </div>

  );
  }
}
