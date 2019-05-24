export const BIO_FETCHED = "BIO_FETCHED";
export const GET_BIO = "GET_BIO";

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