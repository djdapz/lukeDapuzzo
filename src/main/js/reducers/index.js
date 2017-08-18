import { combineReducers } from 'redux';
import routeReducer from "./RouteReducer";


const rootReducer = combineReducers({
  route: routeReducer
});

export default rootReducer;
