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
                {AdminRoutes.toLinks(this.props.location.pathname)}
                {AdminRoutes.renderRedirect()}
                {AdminRoutes.toRoutes()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllVenues}, dispatch);

export default connect(null, mapDispatchToProps)(AdminPage);


