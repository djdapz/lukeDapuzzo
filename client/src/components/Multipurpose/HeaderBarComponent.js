import React, {Component} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SocialMediaIcon from "./SocialMediaIcon";
import routes from "../../constants/routes";

const iconPaths = [
    "/png/fb_white.png",
    "/png/twitter_white.png",
    "/png/youtube_white.png",
    "/png/ig_icon_white.png"
];

class HeaderBar extends Component {
    renderHomeLink() {
        let titleClassName = "title";

        if(this.props.route.name === routes.HOME.name){
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

    static renderSocialMediaRow() {
        const iconElements = iconPaths.map(iconPath => <SocialMediaIcon key={iconPath} iconPath={iconPath}/>);

        return (
            <div className="social-media-icons">
                {iconElements}
            </div>
        )
    }

    render() {
        return (
            <div className="row header-bar">
                {this.renderHomeLink()}
                {HeaderBar.renderSocialMediaRow()}
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





