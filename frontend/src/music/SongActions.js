import Api from "../api/Api"
import { declareForm } from "../actions/FormActions"

export const ALL_SONGS_FETCHED = "ALL_SONGS_FETCHED"

export const DELETE_SONG_FAILED = "DELETE_SONG_FAILED"
export const SONG_DELETED = "SONG_DELETED"

export const deleteSong = (id, type) => (dispatch) => Api.delete(`/music/${id}`)
  .then(() => dispatch({
    type: SONG_DELETED,
    payload: { id, type }
  }))
  .catch(({ status }) => dispatch({
    type: DELETE_SONG_FAILED,
    payload: { status, id }
  }))

export const getAllSongs = () => (dispatch) => Api.get("/music")
  .then((response) => response.data)
  .then(songs => ({
    type: ALL_SONGS_FETCHED,
    payload: songs
  }))
  .then(dispatch)

export const createSongForm = declareForm({
  formName: "newSong",
  fields: [
    { name: "id", required: true },
    { name: "name", required: true },
    { name: "type", required: true }
  ],
  path: "/music",
  onSuccess: (dispatch) => dispatch(getAllSongs()),
  errorMessage: "There was an issue making your song, make sure you're not trying to create a duplicate"
})