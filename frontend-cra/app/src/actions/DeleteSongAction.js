/**
 * Created by devondapuzzo on 8/24/17.
 */

export const DELETE_SONG_FAILED = "DELETE_SONG_FAILED";
export const DELETE_SONG = "DELETE_SONG";
export const SONG_DELETED = "SONG_DELETED";

export const deleteSong = (id, type) => {
    return {
        type: DELETE_SONG,
        payload: {id, type}
    }
};

export const songDeleted = (id, type) => {
    return {
        type: SONG_DELETED,
        payload: {id, type}
    }
};

export const deleteSongFailed = (status, id) => {
    return {
        type: DELETE_SONG_FAILED,
        payload: {status, id}
    }
};
