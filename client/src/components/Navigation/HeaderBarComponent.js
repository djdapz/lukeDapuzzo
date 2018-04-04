import React, {Component} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SocialMediaIcon from "./SocialMediaIcon";
import routes from "../../constants/routes";
import Menubar from "./MenuBarContainer"
import MediaQuery from "react-responsive";
import {bindActionCreators} from "redux";
import {closeMobileMenuBar, openMobileMenuBar} from "../../actions/ToggleMobileMenubarActions";

import {socialMediaIcons, socialMediaIconColors} from "../../constants/socialMediaIcons";
import {mobileCutoff} from "../../constants/constants";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class HeaderBar extends Component {

    constructor() {
        super();
        this.state = {
            menubarCollapsed: false
        };

        this.renderNavigation = this.renderNavigation.bind(this);
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

    socialHamburgerPressed() {
        if (this.props.isMenubarOpen) {
            this.props.closeMobileMenuBar()
        } else {
            this.props.openMobileMenuBar()
        }
    }

    determineMenubarClass() {
        return this.props.isMenubarOpen ? "menubar-expanded" : "menubar-collapsed";
    }

    renderNavigation() {
        return (
            <div>
                <MediaQuery maxWidth={mobileCutoff}>
                    {this.renderDropdown()}
                </MediaQuery>
                <MediaQuery minWidth={mobileCutoff}>
                    {HeaderBar.renderSocialMediaIcons()}
                </MediaQuery>
            </div>
        )
    }

    renderDropdown() {
        return (
            <div className="social-media-icons">
                <div id="social-media-hamburger">
                    <FontAwesomeIcon icon="bars" className={"social-media-icon"} onClick={this.socialHamburgerPressed}/>
                </div>
                <div className={this.determineMenubarClass()}>
                    <Menubar menubarPosition="menubar-mobile"/>
                </div>
            </div>
        )
    }

    static renderSocialMediaIcons() {
        const iconElements = socialMediaIcons.map(icon => <SocialMediaIcon icon={icon} colors={socialMediaIconColors.header}/>);

        return (
            <div className="social-media-icons">
                <div id="social-media-expanded">
                    {iconElements}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="row header-bar">
                {this.renderHomeLink()}
                {this.renderNavigation()}
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        route: state.route,
        isMenubarOpen: state.isMenubarOpen,
        isMobile: state.isMobile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            openMobileMenuBar: openMobileMenuBar,
            closeMobileMenuBar: closeMobileMenuBar
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);





