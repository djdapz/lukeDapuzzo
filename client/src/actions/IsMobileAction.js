const IS_MOBILE = "IS_MOBILE";

let tellAppItsMobile =  function(isIt){
    return {
        type: IS_MOBILE,
        payload: isIt
    }
};

export {
    IS_MOBILE,
    tellAppItsMobile
};