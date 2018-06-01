/**
 * Created by devondapuzzo on 8/24/17.
 */

export const DELETE_SONG_FAILED = "DELETE_SONG_FAILED";
export const DELETE_SONG = "DELETE_SONG";
export const CLEAR_DELETE_SONG = "CLEAR_DELETE_SONG";
export const SONG_DELETED = "SONG_DELETED";

export const deleteSong = (id) => {
    return {
        type: DELETE_SONG,
        payload: {id}
    }
};


export const clearDeleteSong = () => {
    return {
        type: CLEAR_DELETE_SONG,
        payload: []
    }
};

export const songDeleted = (id) => {
    return {
        type: SONG_DELETED,
        payload: {id}
    }
};

export const deleteSongFailed = (status, id) => {
    return {
        type: DELETE_SONG_FAILED,
        payload: {status, id}
    }
};
