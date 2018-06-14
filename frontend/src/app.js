import React, {Component} from 'react';
import ReactRouter from "./routing/RouterComponent";
import HeaderBar from "./components/Navigation/HeaderBarComponent";

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, solid);

class App extends Component {
    render() {
        return (
            <div id="app">
                <HeaderBar/>
                <ReactRouter/>
            </div>

        );
    }
}

export default App;