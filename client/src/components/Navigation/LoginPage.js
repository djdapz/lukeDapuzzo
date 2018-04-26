import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import routes from "../../constants/routes";

class LoginPage extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.routeChanged(routes.LOGIN)
    }

    render() {
        return (
            <div className="main-content">
                <div id={"login-window"}>
                    <h2>Login</h2>
                    <input className={"form-control"} placeholder={"Username"} type={"text"}/>
                    <input className={"form-control"} placeholder={"Password"} type={"password"}/>
                    <button className="btn btn-outline-primary float-none">Send it!</button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginPage);