import {ROUTE_CHANGED_ACTION} from "../actions/RouteChangedAction"

let routeReducer = (state =[], action) =>{
    if(action.type === ROUTE_CHANGED_ACTION){
        return action.payload;
    }

    return state;
};

export default routeReducer;