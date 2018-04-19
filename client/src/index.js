import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';

// noinspection ES6UnusedImports
import style from '../style/app.scss'

import App from './components/app';
import reducers from './reducers/index';
import {BrowserRouter} from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

