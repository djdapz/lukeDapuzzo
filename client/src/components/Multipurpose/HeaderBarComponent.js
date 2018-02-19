import React, {Component} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SocialMediaIcon from "./SocialMediaIcon";
import routes from "../../constants/routes";

import Menubar from "./MenuBarContainer"
import MediaQuery from "react-responsive";

const iconPaths = [
    "/png/fb_white.png",
    "/png/twitter_white.png",
    "/png/youtube_white.png",
    "/png/ig_icon_white.png"
];

class HeaderBar extends Component {

    constructor(){
        super();
        this.state = {
            menubarCollapsed: false
        };

        this.renderSocialMediaRow = this.renderSocialMediaRow.bind(this);
        this.determineMenubarClass = this.determineMenubarClass.bind(this);
        this.socialHamburgerPressed = this.socialHamburgerPressed.bind(this);
    }

    renderHomeLink() {
        let titleClassName = "title";

        if (this.props.route.name === routes.HOME.name) {
            titleClassName += " title-active";
        }

        return (
            <div className="title-container">
                <Link to="/" className={titleClassName}>
                    Luke D'Apuzzo
                </Link>

                <p className="sub-title">
                    A solo songwriter and musician from Boulder, Colorado
                </p>
            </div>

        )
    }

    socialHamburgerPressed(){
        this.setState({
            menubarCollapsed: !this.state.menubarCollapsed
        });
    }

    determineMenubarClass() {
        return this.state.menubarCollapsed === false ? "menubar-collapsed" : "menubar-expanded";
    }

    renderSocialMediaRow() {
        const iconElements = iconPaths.map(iconPath => <SocialMediaIcon key={iconPath} iconPath={iconPath}/>);

        return (
            <div className="social-media-icons">

                <MediaQuery query="(max-device-width: 768px)">
                    <div id="social-media-hamburger">
                        <span className="oi oi-menu" title="menu icon" aria-hidden="true" onClick={this.socialHamburgerPressed}/>
                    </div>
                    <div className={this.determineMenubarClass()}>
                        <Menubar menubarPosition="menubar-mobile"/>
                    </div>
                </MediaQuery>

                <MediaQuery query="(min-device-width: 768px)">
                    <div id="social-media-expanded">
                        {iconElements}
                    </div>
                </MediaQuery>

            </div>
        )
    }

    render() {
        return (
            <div className="row header-bar">
                {this.renderHomeLink()}
                {this.renderSocialMediaRow()}
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        route: state.route
    }
}


export default connect(mapStateToProps)(HeaderBar);





