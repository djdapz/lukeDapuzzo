import React, {Component} from 'react';

import {connect} from "react-redux";

import {socialMediaIconColors, socialMediaIcons} from "../../constants/socialMediaIcons";

import SocialMediaIcon from "./SocialMediaIcon";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../../constants/constants";
import NavButton from "./NavButton";
import PropTypes from "prop-types";

class Menubar extends Component {

    shouldDisplayRoute(route) {
        return (route.displayInMenuBar && route.isProtected && this.props.isAuthenticated)
            || (!route.isProtected && route.displayInMenuBar)
    }

    renderButtons() {
        return Object.keys(this.props.routes).map(key => {
            const route = this.props.routes[key];
            if (this.shouldDisplayRoute(route)) {
                return <NavButton route={route} callback={this.props.callback} key={route.name}/>
            }
        })
    }

    static renderSocialMediaIcons() {
        return <MediaQuery maxWidth={mobileCutoff}>
            {socialMediaIcons.map(icon => <SocialMediaIcon icon={icon} key={icon.href}
                                                           colors={socialMediaIconColors.dropdown}/>)}
        </MediaQuery>
    }

    render() {
        return (
            <div className={` menubar ${this.props.menubarPosition} ${this.props.route.menubarClassName}`}>
                {this.renderButtons()}
                {Menubar.renderSocialMediaIcons()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        route: state.route,
        isAuthenticated: state.user.isAuthenticated
    }
}

Menubar.propTypes = {
    routes: PropTypes.object,
    menubarPosition: PropTypes.string,
    callback: PropTypes.func
};

Menubar.defaultProps = {
    callback: () => undefined,
    routes: {}
};

export default connect(mapStateToProps)(Menubar);




