import React, {Component} from 'react';
import {AdminRoutes} from "../../routing/AdminRoutes";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllVenues} from "../../actions/VenueActions";

class AdminPage extends Component {

    constructor(props) {
        super(props);
        props.getAllVenues()
    }


    render() {
        return (
            <div id="admin-page"
                 className="main-content">
                {AdminRoutes.toLinks(this.props.path)}
                {AdminRoutes.renderRedirect()}
                {AdminRoutes.toRoutes()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllVenues}, dispatch);
const mapStateToProps = (state) => ({
    path: state.reduxRouter.location.pathname
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);


