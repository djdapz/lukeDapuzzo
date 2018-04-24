import axios from "axios";
import {LUKE_API} from "../config/appConfig";

const GET_ALL_SHOWS = "GET_ALL_SHOWS";

let getAllShowsAction = function (shows) {
    return {
        type: GET_ALL_SHOWS,
        payload: shows
    }
};

export {
    getAllShowsAction,
    GET_ALL_SHOWS
};