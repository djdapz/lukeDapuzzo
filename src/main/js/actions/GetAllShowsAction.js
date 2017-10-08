import axios from "axios";

const GET_ALL_SHOWS = "GET_ALL_SHOWS";

let getAllShows =  function(){
    const request = axios.get("/api/shows");
    return {
        type: GET_ALL_SHOWS,
        payload: request
    }
};

export {
    getAllShows,
    GET_ALL_SHOWS
};