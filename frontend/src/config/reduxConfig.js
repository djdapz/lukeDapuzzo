import reducers from "../reducers"
import { applyMiddleware, createStore } from "redux"
import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from "react-router-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

export const history = createHistory();

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
