import React, {Component} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SocialMediaIcon from "./SocialMediaIcon";

const iconPaths = [
    "/png/fb_white.png",
    "/png/twitter_white.png",
    "/png/youtube_white.png",
    "/png/ig_icon_white.png"
];

class HeaderBar extends Component {
    static renderHomeLink() {
        return (
            <div className="title-container">
                    <Link to="/" className="title">
                        Luke D'Apuzzo
                    </Link>

                    <p className="sub-title">
                        A solo songwriter and musician from Boulder, Colorado
                    </p>
            </div>

        )
    }

    static renderSocialMediaRow() {
        const iconElements = iconPaths.map(iconPath => <SocialMediaIcon iconPath={iconPath}/>);

        return (
            <div className="social-media-icons">
                {iconElements}
            </div>
        )
    }

    render() {
        return (
            <div className="row header-bar">
                {HeaderBar.renderHomeLink()}
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





