import React, {Component} from 'react';

import {push} from "react-router-redux/actions"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class NavButton extends Component {

    constructor() {
        super();
        this.navigate = this.navigate.bind(this)
    }

    render() {
        return <div key={this.props.route.name} className={this.rowClassName()} onClick={this.navigate}>
            <h3 className="menubar-link"> {this.props.route.name}</h3>
        </div>
    }

    navigate() {
        this.props.callback();
        this.props.push(this.props.route.href);
    }

    rowClassName() {
        let rowClassName = "menubar-row";

        if (this.props.route.href === this.props.currentRoute.href) {
            rowClassName += " menubar-active";
        }
        return rowClassName;
    }
}

NavButton.propTypes = {
    route: PropTypes.objectOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        displayInMenuBar: PropTypes.bool,
        isProtected: PropTypes.bool,
        header: PropTypes.string,
        menubarClassName: PropTypes.string
    })),
    callback: PropTypes.func
};

NavButton.defaultProps = {
    callback: () => undefined
};

function mapStateToProps(state) {
    return {
        currentRoute: state.route
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            push: push
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);