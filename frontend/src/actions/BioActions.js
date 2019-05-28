export const BIO_FETCHED = "BIO_FETCHED";
export const GET_BIO = "GET_BIO";
export const SAVE_BIO = "SAVE_BIO";

export const bioFetched = function (venues) {
    return {
        type: BIO_FETCHED,
        payload: venues
    }
};

export const getBio = function () {
    return {
        type: GET_BIO,
        payload: {}
    }
};

export const saveBio = function(bio){
    return {
        type: SAVE_BIO,
        payload: {
            bio
        }
    }
};