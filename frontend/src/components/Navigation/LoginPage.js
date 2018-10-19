import React, {Component} from "react";

import {connect} from "react-redux";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import {bindActionCreators} from "redux";

import {loginAction} from "../../actions/UserActions";
import {FAILED, SUBMITTED} from "../../constants/formStates";
import TextField from "@material-ui/core/TextField/TextField";
import NavButton from "./NavButton";
import Button from "@material-ui/core/Button/Button";


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
                    <TextField className={"form-control dark-input"} placeholder={"Username"} type={"text"}
                               value={this.state.username} onChange={this.handleUsernameChange}
                               onKeyUp={this.listenForSubmit}
                               variant="outlined">
                    </TextField>
                    <TextField className={"form-control dark-input"} id={"password-field"} placeholder={"Password"} type={"password"}
                           value={this.state.password} onChange={this.handlePasswordChange}
                           onKeyUp={this.listenForSubmit}
                               variant="outlined"/>
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
            return <Button className="btn btn-outline-primary float-none"  variant="outlined" color="primary"  onClick={this.submitLogin}>Send it!</Button>
        }
    }


    listenForSubmit(event) {
        if (event.key === "Enter") {
            this.submitLogin();
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAction}, dispatch)
}

function mapStateToProps(state) {
    return ({loginState: state.user.loginState});
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);