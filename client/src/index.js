import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'
// noinspection ES6UnusedImports
import style from '../style/app.scss'

import App from './app';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <App/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
