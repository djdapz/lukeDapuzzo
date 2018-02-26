import React, {Component} from 'react';

import {connect} from "react-redux";

import routes from "../../constants/routes"
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {closeMobileMenuBar} from "../../actions/ToggleMobileMenubarActions";
import {Redirect} from "react-router";

import socialMediaIcons from "../../constants/socialMediaIcons"
import SocialMediaIcon from "./SocialMediaIcon";
import MediaQuery from "react-responsive";

class Menubar extends Component {
    menubarPosition;

    renderButtons() {
        return Object.keys(routes).map(key => {
            if (routes[key].displayInMenuBar === false) {
                return;
            }

            let button = routes[key];
            let rowClassName = "menubar-row";

            if (this.props.route.href === button.href) {
                rowClassName += " menubar-active";
            }

            return (
                <Link key={button.name} to={button.href} onClick={this.collapseMenubar}>
                    <div className={rowClassName}>
                        <p className="menubar-link"> {button.name}</p>
                    </div>
                </Link>
            )
        })
    }

    collapseMenubar() {
        this.props.closeMobileMenuBar()
    };

    static renderSocialMediaIcons() {
        return <MediaQuery maxWidth={776}>
            {socialMediaIcons.map(icon => <SocialMediaIcon icon={icon} color={"black"}/>)}
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




