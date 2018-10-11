import React, {Component} from 'react';
import {AdminRoutes} from "../../routing/AdminRoutes";


class AdminPage extends Component {

    constructor() {
        super();
        this.routes = AdminRoutes;
    }


    render() {
        return (
            <div id="admin-page" className="main-content">
                {this.routes.toLinks(this.props.location.pathname)}
                {this.routes.renderRedirect()}
                {this.routes.toRoutes()}
            </div>
        )
    }
}

export default AdminPage;


