import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction";
import SongTable from "./SongTableComponent"

class AdminPage extends Component {

    componentDidMount() {
        this.props.routeChanged(routes.ADMIN);
    }

    render() {
        return (

            <div id="admin-page" className="main-content">
                <SongTable/>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null, mapDispatchToProps)(AdminPage);