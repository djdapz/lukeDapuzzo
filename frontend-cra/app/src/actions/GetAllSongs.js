export const GET_ALL_SONGS = "GET_ALL_SONGS";
export const ALL_SONGS_FETCHED = "ALL_SONGS_FETCHED";

export const getAllSongs =  function(){
    return {
        type: GET_ALL_SONGS,
        payload: {}
    }
};

export const allSongsFetched =  function(songs){
    return {
        type: ALL_SONGS_FETCHED,
        payload: songs
    }
};