import React, {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import {LukeTextField} from "../Multipurpose/FormComponents";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core";

import {authForm} from "../../actions/AuthFormAction";

class LoginPage extends Component {
    theme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#62f7c8",
            },
        },
    });

    render() {
        return (
            <div className="main-content">
                <div id={"login-window"}>
                    <h2>Login</h2>
                    {this.renderWarning()}
                    <MuiThemeProvider theme={this.theme}>
                        <LukeTextField label={"Username"}
                                       type={"text"}
                                       value={this.props.username}
                                       onChange={this.props.update_username}
                                       onKeyUp={this.listenForSubmit}
                                       variant="outlined"/>
                        <LukeTextField id={"password-field"}
                                       label={"Password"}
                                       type={"password"}
                                       value={this.props.password}
                                       onChange={this.props.update_password}
                                       onKeyUp={this.listenForSubmit}
                                       variant="outlined"/>
                        <Button className="btn btn-outline-primary float-none"
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                    this.props.submitForm()
                                }}>Send it!</Button>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }

    renderWarning() {
        if (this.props.authForm.error.length > 0) {
            return <p id={"user-alert"}>{this.props.authForm.error}</p>
        }
    }

    //
    // renderButtonOrSpinnyWheel() {
    //     if (this.props.loginState === SUBMITTED) {
    //         return <FontAwesomeIcon id={"loading-wheel"}
    //                                 icon={["fa", "spinner"]}
    //                                 pulse
    //                                 size={"2x"}/>
    //     } else {
    //         return <Button className="btn btn-outline-primary float-none"
    //                        variant="outlined"
    //                        color="primary"
    //                        onClick={this.submitLogin}>Send it!</Button>
    //     }
    // }


    listenForSubmit = (event) => {
        if (event.key === "Enter") {
            this.props.submitForm()
        }
    }
}


export default authForm.connect(LoginPage)