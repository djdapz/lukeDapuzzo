import React, {Component} from 'react';

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import aws from "../../constants/aws";
import SocialMediaIcon from "./SocialMediaIcon";

const iconPaths = [
    "/png/fb_white.png",
    "/png/twitter_white.png",
    "/png/youtube_white.png",
    "/png/ig_icon_white.png"
];

class HeaderBar extends Component {
    render() {
        return (
            <div className="row header-bar">
                <div className="col-6 title-container">
                    {HeaderBar.renderHomeLink()}
                </div>
                <div className="col-6">
                    {this.renderSocialMediaRow()}
                </div>

            </div>

        )
    }

    static renderHomeLink() {
        return (
            <Link to="/" className="title">
                Luke D'Apuzzo
            </Link>
        )
    }

    renderSocialMediaRow(){
        const iconElements = iconPaths.map( iconPath => <SocialMediaIcon iconPath={iconPath}/>);

        return(
            <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-8"></div>
                {iconElements}
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





