import React from 'react';

import {push} from "connected-react-router"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


const NavButton = ({callback, route, router, push}) => {
    const navigate = () => {
        callback();
        push(route.href);
    };

    const maybeActive = () => route.href === router.location.pathname ? " menubar-active" : "";

    return <div key={route.name}
                className={`menubar-row ${maybeActive()}`}
                onClick={navigate}>
        <h3 className="menubar-link"> {route.name}</h3>
    </div>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            push: push
        },
        dispatch
    )
}

function mapStateToProps(state) {
    return {
        router: state.router
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);