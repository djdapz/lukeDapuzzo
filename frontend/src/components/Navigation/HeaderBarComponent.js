import React, { Component } from "react"

import { connect } from "react-redux"
import routes from "../../constants/routes"
import Menubar from "./MenuBarContainer"
import { bindActionCreators } from "redux"
import { push } from "react-router-redux"
import { getAllSongs } from "../../actions/GetAllSongs"
import Button from "@material-ui/core/Button/Button"
import MenuIcon from "@material-ui/icons/Menu"
import { getBio } from "../../actions/BioActions"
import { getAllShows } from "../../actions/ShowActions"

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
        this.props.getBio();
    }

    renderDescription() {
        const r = routes.HOME.href;
        const l = this.props.route.location.pathname;
        if (r === l) {
            return <h5 className="sub-title">A solo songwriter and musician from Boulder, Colorado</h5>
        } else {
            return ""
        }
    }

    renderHomeLink() {
        const titleClassName = "title" + (this.props.route.location.pathname === routes.HOME.href ? " title-active" : "");
        return (
            <div className="title-container">
                <div onClick={() => {
                    this.props.push("/");
                    this.setState({menubarCollapsed: true});
                }}
                     className={titleClassName}>
                    <img src={"/header.png"}
                         alt={"Luke Dapuzzo"}/>
                </div>
                {this.renderDescription()}
            </div>

        )
    }

    socialHamburgerPressed = () => this.setState({menubarCollapsed: !this.state.menubarCollapsed});

    determineMenubarClass = () => this.state.menubarCollapsed ? "menubar-collapsed" : "menubar-expanded";

    collapseMenuBar = () => this.setState({menubarCollapsed: true});


    renderMenuButton() {
        return (
            <div className="social-media-icons">
                <Button onClick={this.socialHamburgerPressed}
                        id={"social-media-hamburger"}
                        aria-label="Add">
                    <MenuIcon/>
                </Button>
            </div>
        )
    }

    renderMenubar() {
        return (
            <Menubar menubarClass={this.determineMenubarClass()}
                     routes={routes}
                     callback={this.collapseMenuBar}/>
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
            push, getAllShows, getAllSongs, getBio
        },
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);





