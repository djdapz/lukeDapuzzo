import React, {Component} from 'react';

import {connect} from "react-redux";
import SocialMediaIcon from "./SocialMediaIcon";
import routes from "../../constants/routes";
import Menubar from "./MenuBarContainer"
import {bindActionCreators} from "redux";

import {socialMediaIconColors, socialMediaIcons} from "../../constants/socialMediaIcons";
import {push} from "react-router-redux"
import {getAllSongs} from "../../actions/GetAllSongs";
import {getAllShows} from "../../actions/GetAllShows";
import Button from "@material-ui/core/Button/Button";
import MenuIcon from '@material-ui/icons/Menu';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menubarCollapsed: true
        };
    }

    componentDidMount() {
        this.props.getAllSongs();
        this.props.getAllShows();
    }

    renderHomeLink() {
        const titleClassName = "title" + (this.props.route.location.pathname === routes.HOME.href ? " title-active" : "");
        return (
            <div className="title-container">
                <div onClick={() => {
                    this.props.push("/");
                    this.setState({menubarCollapsed: true});
                }} className={titleClassName}>
                    Luke D'Apuzzo
                </div>
                {this.props.route === routes.HOME
                    ? <h5 className="sub-title">A solo songwriter and musician from Boulder, Colorado</h5>
                    : ""
                }
            </div>

        )
    }

    socialHamburgerPressed = () => this.setState({menubarCollapsed: !this.state.menubarCollapsed});

    determineMenubarClass = () => this.state.menubarCollapsed ? "menubar-collapsed" : "menubar-expanded";

    collapseMenuBar = () => this.setState({menubarCollapsed: true});


    renderMenuButton() {
        return (
            <div className="social-media-icons">
                <Button onClick={this.socialHamburgerPressed} id={"social-media-hamburger"}
                        aria-label="Add">
                    <MenuIcon/>
                </Button>
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
        route: state.reduxRouter
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





