import React, { Component } from 'react';
import MenubarComponent from "./Multipurpose/MenuBarContainer";
import SocialMediaBar from "./Multipurpose/SocialMediaBar";
import MainContent from "./RouterComponent";

export default class App extends Component {
  render() {
    return (
        <div>
            <MenubarComponent/>
            <MainContent/>
            <SocialMediaBar/>
        </div>

  );
  }
}
