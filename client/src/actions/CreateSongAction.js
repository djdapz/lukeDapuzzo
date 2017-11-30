/**
 * Created by devondapuzzo on 8/24/17.
 */
import axios from "axios";

const NEW_SONG_ACTION = "NEW_SONG_ACTION";

let createSong =  function(song){
    let postRequest = axios.post("/api/songs",
        {
            id: song.id,
            name: song.name
        });

    return {
        type: NEW_SONG_ACTION,
        payload: postRequest
    }
};

export {
    createSong,
    NEW_SONG_ACTION
};