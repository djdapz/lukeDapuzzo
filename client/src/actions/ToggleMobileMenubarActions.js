const OPEN_MOBILE_MENUBAR = "OPEN_MOBILE_MENUBAR";
const CLOSE_MOBILE_MENUBAR = "CLOSE_MOBILE_MENUBAR";

let openMobileMenuBar =  function(){
    return {
        type: OPEN_MOBILE_MENUBAR,
        payload: []
    }
};

let closeMobileMenuBar =  function(){
    return {
        type: CLOSE_MOBILE_MENUBAR,
        payload: []
    }
};

export {
    openMobileMenuBar,
    closeMobileMenuBar,
    OPEN_MOBILE_MENUBAR,
    CLOSE_MOBILE_MENUBAR
};