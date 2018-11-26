export const CREATE_SONG_ACTION = "CREATE_SONG_ACTION";
export const SONG_CREATED = "SONG_CREATED";
export const CREATE_SONG_FAILED = "CREATE_SONG_FAILED";
export const CREATE_SONG_CLEARED = "CREATE_SONG_CLEARED";

export const createSong = function (song) {
    return {
        type: CREATE_SONG_ACTION,
        payload: song
    }
};

export const songCreated = function (song) {
    return {
        type: SONG_CREATED,
        payload: song
    }
};

export const createSongFailed = function (error) {
    return {
        type: CREATE_SONG_FAILED,
        payload: error
    }
};

export const SONG_FORM_CHANGE_ID = "SONG_FORM_CHANGE_ID";
export const SONG_FORM_CHANGE_NAME = "SONG_FORM_CHANGE_NAME";
export const SONG_FORM_CHANGE_TYPE = "SONG_FORM_CHANGE_TYPE";

export const songFormChangeId = (id ) => ({type: SONG_FORM_CHANGE_ID, payload: id});
export const songFormChangeName = (name ) => ({type: SONG_FORM_CHANGE_NAME, payload: name});
export const songFormChangeType = (type ) => ({type: SONG_FORM_CHANGE_TYPE, payload: type});