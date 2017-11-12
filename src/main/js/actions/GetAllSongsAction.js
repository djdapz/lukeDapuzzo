import axios from "axios";

const GET_ALL_SONGS = "GET_ALL_SONGS";

let getAllSongs =  function(){
    const request = axios.get("/api/songs");
    return {
        type: GET_ALL_SONGS,
        payload: request
    }
};

export {
    getAllSongs,
    GET_ALL_SONGS
};