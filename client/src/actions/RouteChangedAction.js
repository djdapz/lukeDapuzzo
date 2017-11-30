const ROUTE_CHANGED_ACTION = "ROUTE_CHANGED_ACTIONs";

let routeChanged =  function(newRoute){
    return {
        type: ROUTE_CHANGED_ACTION,
        payload: newRoute
    }
};

export {
    routeChanged,
    ROUTE_CHANGED_ACTION
};