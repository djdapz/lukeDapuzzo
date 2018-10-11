import React, {Component} from 'react';

import {connect} from "react-redux";

import {socialMediaIconColors, socialMediaIcons} from "../../constants/socialMediaIcons";

import SocialMediaIcon from "./SocialMediaIcon";
import NavButton from "./NavButton";
import PropTypes from "prop-types";

class Menubar extends Component {

    shouldDisplayRoute(route) {
        return (route.displayInMenuBar && route.isProtected && this.props.isAuthenticated)
            || (!route.isProtected && route.displayInMenuBar)
    }

    renderButtons() {
        return Object.values(this.props.routes).map(route => this.shouldDisplayRoute(route) ?
            <NavButton route={route} callback={this.props.callback} key={route.name}/> : ""
        );
    }

    static renderSocialMediaIcons() {
        return socialMediaIcons.map(icon => <SocialMediaIcon icon={icon} key={icon.href}
                                                             colors={socialMediaIconColors.dropdown}/>)
    }

    render() {
        return (
            <div className={`menubar ${this.props.menubarClass}`}>
                {this.renderButtons()}
                {Menubar.renderSocialMediaIcons()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

Menubar.propTypes = {
    routes: PropTypes.object,
    menubarClass: PropTypes.string,
    callback: PropTypes.func
};

Menubar.defaultProps = {
    callback: () => undefined,
    routes: {}
};

export default connect(mapStateToProps)(Menubar);




