const TOGGLE_MOBILE_MENUBAR_STATE = "TOGGLE_MOBILE_MENUBAR_STATE";

let toggleMobileMenubar =  function(){
    return {
        type: TOGGLE_MOBILE_MENUBAR_STATE,
        payload: []
    }
};

export {
    toggleMobileMenubar,
    TOGGLE_MOBILE_MENUBAR_STATE
};