import {ROUTE_CHANGED_ACTION} from "../actions/RouteChangedAction"
import routes from "../constants/routes"

let routeReducer = (state = routes.HOME, action) => {
    if (action.type === ROUTE_CHANGED_ACTION) {
        return action.payload;
    }

    return state;
};

export default routeReducer;