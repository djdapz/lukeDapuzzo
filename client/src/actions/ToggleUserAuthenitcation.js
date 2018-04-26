const TOGGLE_USER_AUTHENTICATION = "TOGGLE_USER_AUTHENTICATION";

let toggleUserAuthentication =  function(){
    return {
        type: TOGGLE_USER_AUTHENTICATION,
        payload: []
    }
};

export {
    toggleUserAuthentication,
    TOGGLE_USER_AUTHENTICATION
};