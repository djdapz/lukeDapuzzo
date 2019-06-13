import React, {Component} from 'react';
import HeaderBar from "../navigation/HeaderBarComponent";
import Router from "./routing/RouterComponent";

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, solid);

class App extends Component {
    render() {
        return (
            <div id="app">
                <HeaderBar/>
                <Router/>
            </div>
        );
    }
}

export default App;