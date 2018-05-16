import React, {Component} from 'react';

import {connect} from "react-redux";

import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {closeMobileMenuBar} from "../../actions/ToggleMobileMenubarActions";

import {socialMediaIconColors, socialMediaIcons} from "../../constants/socialMediaIcons";

import SocialMediaIcon from "./SocialMediaIcon";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../../constants/constants";

class Menubar extends Component {

    menubarPosition;
    routes;

    constructor(menubarPosition, routes) {
        super();
        this.menubarPosition = menubarPosition;
        this.routes = routes;
    }

    shouldNotDisplayRoute(route) {
        return !route.displayInMenuBar
            || (route.isProtected && !this.props.isAuthenticated)
    }

    renderButtons() {
        return Object.keys(this.props.routes).map(key => {
            const route = this.props.routes[key];
            if (this.shouldNotDisplayRoute(route)) {
                return
            }
            return (
                <div onClick={this.collapseMenubar} key={route.name}>
                    <Link to={route.href}>
                        <div className={this.rowClassName(route)}>
                            <p className="menubar-link"> {route.name}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    rowClassName(route) {
        let rowClassName = "menubar-row";

        if (this.props.route.href === route.href) {
            rowClassName += " menubar-active";
        }
        return rowClassName;
    }

    collapseMenubar() {
        this.props.closeMobileMenuBar()
    };

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({closeMobileMenuBar}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);




