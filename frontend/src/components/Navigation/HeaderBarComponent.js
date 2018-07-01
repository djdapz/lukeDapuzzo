import React, {Component} from 'react';

import {connect} from "react-redux";
import SocialMediaIcon from "./SocialMediaIcon";
import routes from "../../constants/routes";
import Menubar from "./MenuBarContainer"
import {bindActionCreators} from "redux";

import {socialMediaIconColors, socialMediaIcons} from "../../constants/socialMediaIcons";
import {push} from "react-router-redux"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {getAllSongs} from "../../actions/GetAllSongs";
import {getAllShows} from "../../actions/GetAllShows";

class HeaderBar extends Component {
    constructor() {
        super();
        this.state = {
            menubarCollapsed: true
        };

        this.determineMenubarClass = this.determineMenubarClass.bind(this);
        this.socialHamburgerPressed = this.socialHamburgerPressed.bind(this);
        this.collapseMenuBar = this.collapseMenuBar.bind(this);
    }

    componentDidMount(){
        this.props.getAllSongs();
        this.props.getAllShows();
    }

    renderHomeLink() {
        const titleClassName = "title" + (this.props.route === routes.HOME ? " title-active" : "");
        return (
            <div className="title-container">
                <div onClick={() => {this.props.push("/"); this.setState({menubarCollapsed: true});}} className={titleClassName}>
                    Luke D'Apuzzo
                </div>
                {this.props.route === routes.HOME
                    ? <h5 className="sub-title">A solo songwriter and musician from Boulder, Colorado</h5>
                    : ""
                }
            </div>

        )
    }

    socialHamburgerPressed() {
        this.setState({
            menubarCollapsed: !this.state.menubarCollapsed
        });
    }

    determineMenubarClass() {
        return this.state.menubarCollapsed ? "menubar-collapsed" : "menubar-expanded";
    }

    collapseMenuBar() {
        this.setState({
            menubarCollapsed: true
        })
    }

    renderMenuButton() {
        return (
            <div className="social-media-icons">
                <div id={"social-media-hamburger"} onClick={this.socialHamburgerPressed}>
                    <FontAwesomeIcon icon="bars" className={"social-media-icon"}/>
                </div>
            </div>
        )
    }

    renderMenubar() {
        return (
            <Menubar menubarClass={this.determineMenubarClass()} routes={routes} callback={this.collapseMenuBar}/>
        )
    }

    static renderSocialMediaIcons() {
        const iconElements = socialMediaIcons.map(icon => <SocialMediaIcon key={icon.href} icon={icon}
                                                                           colors={socialMediaIconColors.header}/>);

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
            <div>
                <div className="row header-bar">
                    {this.renderHomeLink()}
                    {this.renderMenuButton()}
                </div>
                {this.renderMenubar()}
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
    return bindActionCreators(
        {
            push, getAllShows, getAllSongs
        },
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);





