import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// noinspection ES6UnusedImports
import style from '../style/app.scss'

import App from './app';
import reducers from './reducers/index';
import {BrowserRouter} from "react-router-dom";

import {store} from "./config/reduxConfig"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
