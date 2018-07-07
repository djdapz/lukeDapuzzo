import React, {Component} from 'react';
import SongAdmin from "./SongAdmin";
import {Redirect, Route} from "react-router";
import {Link} from "react-router-dom";

function required() {
    throw Error("Required field missing")
}

class AdminRoute {
    constructor(name = required(), path = required(), render = required()) {
        this.name = name;
        this.path = path;
        this.render = render;
    }
}


class AdminRoutes {
    constructor(routes = [], defaultPath = "") {
        this.routes = routes;
        this.defaultPath = defaultPath;
    }


    toLinks(pathname) {
        return <ul className="nav nav-tabs">
            {this.routes.map(route =>
                <li className="nav-item">
                    <Link className={"nav-link " + this.isActive(route, pathname)}
                          to={"/admin" + route.path}>{route.name}</Link>
                </li>)}
        </ul>
    }

    renderRedirect = () => this.defaultPath.length > 0 ? <Redirect to={`/admin${this.defaultPath}`}/> : '';

    toRoutes() {
        return this.routes.map(route =>
            <Route exact path={`/admin${route.path}`} render={route.render}/>)
    }

    isActive = (route, pathname) => pathname.indexOf(route.path) >= 0 ? " active" : "";
}

class AdminPage extends Component {

    constructor() {
        super();
        this.routes = new AdminRoutes([
            new AdminRoute("Songs", "/songs", () => <SongAdmin/>),
            new AdminRoute("Shows", "/shows", () => <div>Add some songs here eventually</div>)
        ], "/songs");
    }


    render() {
        console.log(this.props);
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


