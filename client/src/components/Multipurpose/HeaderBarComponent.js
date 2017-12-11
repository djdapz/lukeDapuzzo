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
            <div>
                <Link to="/" className="title">
                    Luke D'Apuzzo
                </Link>
                <span className="header-subtext">
                        A solo songwriter and musician from Boulder, Colorado
                </span>
            </div>

        )
    }

    static renderSocialMediaRow() {
        const iconElements = iconPaths.map(iconPath => <SocialMediaIcon iconPath={iconPath}/>);

        return (
            <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-8"> </div>
                {iconElements}
            </div>
        )
    }

    render() {
        return (
            <div className="row header-bar">
                <div className="col-6 title-container">
                    {HeaderBar.renderHomeLink()}
                </div>
                <div className="col-6">
                    {HeaderBar.renderSocialMediaRow()}
                </div>

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





