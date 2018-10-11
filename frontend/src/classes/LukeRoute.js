import {Redirect, Route} from "react-router";
import {Link} from "react-router-dom";
import React from 'react';

function required() {
    throw Error("Required field missing")
}

export class LukeRoute {
    constructor(name = required(), path = required(), render = required()) {
        this.name = name;
        this.path = path;
        this.render = render;
    }
}

export class LukeRoutes {
    constructor(routes = [], defaultPath = "", basePath = "/") {
        this.routes = routes;
        this.defaultPath = defaultPath;
        this.basePath = basePath;
    }


    toLinks(pathname) {
        return <ul className="nav nav-tabs">
            {this.routes.map(route =>
                <li className="nav-item" key={route.name}>
                    <Link className={"nav-link" + this.isActive(route, pathname)}
                          to={this.basePath + route.path}>{route.name}</Link>
                </li>)}
        </ul>
    }

    renderRedirect = () => this.defaultPath.length > 0 ?
        <Route exact path={this.basePath}
               render={() => <Redirect to={`${this.basePath}${this.defaultPath}`}/>}/> : '';

    toRoutes() {
        return this.routes.map(route =>
            <Route key={route.href} exact path={`/admin${route.path}`} render={route.render}/>)
    }

    isActive = (route, pathname) => pathname.indexOf(route.path) >= 0 ? " active" : "";
}
