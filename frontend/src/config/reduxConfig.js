import reducers from "../reducers";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {lukeSaga} from "../sagas/Saga";
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from "react-router-redux";
import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware, myRouterMiddleware))
);

sagaMiddleware.run(lukeSaga);
