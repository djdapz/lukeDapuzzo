import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import style from "../style/app.sass"

import App from './components/app';
import reducers from './reducers/index';
import {BrowserRouter} from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
  , document.getElementById('app'));

