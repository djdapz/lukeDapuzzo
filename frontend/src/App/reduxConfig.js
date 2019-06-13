import { applyMiddleware, createStore } from "redux"
import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import createRootReducer from "./createRootReducer"

export const history = createHistory();

export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
