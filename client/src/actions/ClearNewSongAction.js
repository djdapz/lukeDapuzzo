/**
 * Created by devondapuzzo on 8/24/17.
 */
export const CLEAR_NEW_SONG = "CLEAR_NEW_SONG";

export const clearNewSong = function () {
    return {
        type: CLEAR_NEW_SONG,
        payload: []
    }
};