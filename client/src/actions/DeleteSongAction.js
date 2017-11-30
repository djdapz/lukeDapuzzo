/**
 * Created by devondapuzzo on 8/24/17.
 */
import axios from "axios";

const DELETE_SONG = "DELETE_SONG";
const CLEAR_DELETE_SONG = "CLEAR_DELETE_SONG";

let deleteSong = function (song) {
    let deleteRequest = axios.delete("/api/songs?id=" + song.id);

    return {
        type: DELETE_SONG,
        payload: deleteRequest
    }
};


let clearDeleteSong = function () {
    return {
        type: CLEAR_DELETE_SONG,
        payload: []
    }
};

export {
    clearDeleteSong,
    CLEAR_DELETE_SONG,
    deleteSong,
    DELETE_SONG
};