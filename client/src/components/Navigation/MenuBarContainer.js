import React, {Component} from 'react';

import {connect} from "react-redux";

import routes from "../../constants/routes"
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {closeMobileMenuBar} from "../../actions/ToggleMobileMenubarActions";
import {Redirect} from "react-router";

import {socialMediaIcons, socialMediaIconColors} from "../../constants/socialMediaIcons";

import SocialMediaIcon from "./SocialMediaIcon";
import MediaQuery from "react-responsive";
import {mobileCutoff} from "../../constants/constants";

class Menubar extends Component {
    menubarPosition;

    renderButtons() {
        return Object.keys(routes).map(key => {
            if (routes[key].displayInMenuBar === false) {
                return;
            }

            const button = routes[key];
            let rowClassName = "menubar-row";

            if (this.props.route.href === button.href) {
                rowClassName += " menubar-active";
            }

            return (
                <div onClick={this.collapseMenubar} key={button.name}>
                    <Link to={button.href}>
                        <div className={rowClassName}>
                            <p className="menubar-link"> {button.name}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    collapseMenubar() {
        this.props.closeMobileMenuBar()
    };

    static renderSocialMediaIcons() {
        return <MediaQuery maxWidth={mobileCutoff}>
            {socialMediaIcons.map(icon => <SocialMediaIcon icon={icon} key={icon.href} colors={socialMediaIconColors.dropdown}/>)}
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
        route: state.route
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({closeMobileMenuBar: closeMobileMenuBar}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);




