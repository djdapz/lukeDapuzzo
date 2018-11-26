export const ALL_VENUES_FETCHED = "ALL_VENUES_FETCHED";
export const GET_ALL_VENUES = "GET_ALL_VENUES";

export const allVenuesFetched = function (venues) {
    return {
        type: ALL_VENUES_FETCHED,
        payload: venues
    }
};


export const getAllVenues = function () {
    return {
        type: GET_ALL_VENUES,
        payload: {}
    }
};