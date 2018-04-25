import axios from "axios";

const GET_ALL_SONGS = "GET_ALL_SONGS";

let getAllSongsAction =  function(songs){
    return {
        type: GET_ALL_SONGS,
        payload: songs
    }
};

export {
    getAllSongsAction,
    GET_ALL_SONGS
};