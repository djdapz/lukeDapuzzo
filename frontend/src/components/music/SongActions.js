import { http } from "../../api"

export const ALL_SONGS_FETCHED = "ALL_SONGS_FETCHED"

export const DELETE_SONG_FAILED = "DELETE_SONG_FAILED"
export const SONG_DELETED = "SONG_DELETED"

export const deleteSong = (id, type) => (dispatch) => http.delete(`/music/${id}`)
  .then(() => dispatch({
    type: SONG_DELETED,
    payload: { id, type }
  }))
  .catch(({ status }) => dispatch({
    type: DELETE_SONG_FAILED,
    payload: { status, id }
  }))

export const getAllSongs = () => (dispatch) => http.get("/music")
  .then((response) => response.data)
  .then(songs => ({
    type: ALL_SONGS_FETCHED,
    payload: songs
  }))
  .then(dispatch)

export const createSong = ({ id, name, type }) => dispatch =>
  http.post("/music", { id, name, type })
    .then(() => dispatch(getAllSongs()))