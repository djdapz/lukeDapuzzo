import { combineReducers } from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";


const rootReducer = combineReducers({
  route: routeReducer,
    email: emailReducer
});

export default rootReducer;
