import { combineReducers } from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";
import showsReducer from "./ShowsReducer";

const rootReducer = combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer
});

export default rootReducer;
