import {Redirect, Route} from "react-router";
import {Link} from "react-router-dom";
import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";

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

    getValue = (pathname) => {
        const paths = this.routes.map(it => `${this.basePath}${it.path}`);
        if (paths.includes(pathname)) {
            return pathname
        }
        return false
    };

    toLinks(pathname) {
        const value = this.getValue(pathname);

        return <Paper className="nav nav-tabs">
            <Tabs indicatorColor={"primary"} value={value}>
                {this.routes.map((route) =>
                    <Tab value={`${this.basePath}${route.path}`}
                         className="nav-item"
                         key={route.name}
                         label={route.name}
                         component={Link}
                         to={this.basePath + route.path}
                    />)}
            </Tabs>
        </Paper>
    }

    renderRedirect = () => this.defaultPath.length > 0 ?
        <Route exact
               path={this.basePath}
               render={() => <Redirect to={`${this.basePath}${this.defaultPath}`}/>}/> : '';

    toRoutes() {
        return this.routes.map((route, i) =>
            <Route key={`${route.href}-${i}`}
                   exact
                   path={`/admin${route.path}`}
                   render={route.render}/>)
    }
}
