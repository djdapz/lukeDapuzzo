/**
 * Created by devondapuzzo on 8/24/17.
 */
const CLEAR_NEW_SONG = "CLEAR_NEW_SONG";

let clearNewSong =  function(){
    return {
        type: CLEAR_NEW_SONG,
        payload: []
    }
};

export {
    clearNewSong,
    CLEAR_NEW_SONG
};