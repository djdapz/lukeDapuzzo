import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'
import './style/app.scss'

import App from './app';
import {history, store} from "./config/reduxConfig";


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <App/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
