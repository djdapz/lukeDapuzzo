export const GET_ALL_SHOWS = "GET_ALL_SHOWS";
export const ALL_SHOWS_FETCHED = "ALL_SHOWS_FETCHED";

export const allShowsFetched = function (shows) {
    return {
        type: ALL_SHOWS_FETCHED,
        payload: shows
    }
};


export const getAllShows = function () {
    return {
        type: GET_ALL_SHOWS,
        payload: {}
    }
};