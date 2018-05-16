import React, {Component} from "react";

import {connect} from "react-redux";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import {loginAction} from "../../actions/UserActions";

import routes from "../../constants/routes";
import {FAILED, SUBMITTED} from "../../reducers/LoginFormReducer";


class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.renderButtonOrSpinnyWheel = this.renderButtonOrSpinnyWheel.bind(this);
        this.listenForSubmit = this.listenForSubmit.bind(this);
    }

    componentDidMount() {
        this.props.routeChanged(routes.LOGIN)
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    submitLogin() {
        this.props.loginAction(this.state.username, this.state.password);
        this.setState({
            password: ""
        })
    }


    render() {
        return (
            <div className="main-content">
                <div id={"login-window"}>
                    {this.renderWarning()}
                    <h2>Login</h2>
                    <input className={"form-control"} placeholder={"Username"} type={"text"}
                           value={this.state.username} onChange={this.handleUsernameChange}
                           onKeyUp={this.listenForSubmit}/>
                    <input className={"form-control"} id={"password-field"} placeholder={"Password"} type={"password"}
                           value={this.state.password} onChange={this.handlePasswordChange}
                           onKeyUp={this.listenForSubmit}/>
                    {this.renderButtonOrSpinnyWheel()}
                </div>
            </div>
        )
    }

    renderWarning() {
        if (this.props.loginState === FAILED) {
            return <p id={"user-alert"}>The username/password combination did not match</p>
        }
    }

    renderButtonOrSpinnyWheel() {
        if (this.props.loginState === SUBMITTED) {
            return <FontAwesomeIcon id={"loading-wheel"} icon={["fa", "spinner"]} pulse size={"2x"}/>
        } else {
            return <button className="btn btn-outline-primary float-none" onClick={this.submitLogin}>Send it!</button>
        }
    }


    listenForSubmit(event) {
        if (event.key === "Enter") {
            this.submitLogin();
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged, loginAction}, dispatch)
}

function mapStateToProps(state) {
    return ({loginState: state.user.loginState});
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);