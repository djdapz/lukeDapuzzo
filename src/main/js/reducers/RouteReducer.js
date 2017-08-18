import {ROUTE_CHANGED_ACTION} from "../actions/RouteChangedAction"

let routeReduer = (state =[], action) =>{
    if(action.type === ROUTE_CHANGED_ACTION){
        console.log(action);
        return action.payload;
    }

    return state;
};

export default routeReduer;