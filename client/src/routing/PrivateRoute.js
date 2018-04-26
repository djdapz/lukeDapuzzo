import React from 'react';
import {Redirect, Route} from "react-router";

import {store} from "../config/reduxConfig"
import PropTypes from "prop-types";
import SoundcloudComponent from "../components/MusicPage/SoundcloudComponent";


class PrivateRoute extends React.Component {

    render() {
        if (store.getState().user.isAuthenticated) {
            const rest = {...this.props};
            delete rest.component;
            return <Route {...rest} component={this.props.component}/>
        } else {
            return <    Redirect
                to={{
                    pathname: "/login",
                    state: {from: this.props.location}
                }}
            />
        }
    }
}

export default PrivateRoute;
