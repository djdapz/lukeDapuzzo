import { http } from "../../api"

export const ALL_SHOWS_FETCHED = "ALL_SHOWS_FETCHED"

export const SHOW_DELETED = "SHOW_DELETED"
export const DELETE_SHOW_FAILED = "DELETE_SHOW_FAILED"

export const deleteShow = (id) => (dispatch) => http
  .delete(`/shows/${id}`)
  .then(() => dispatch({
    type: SHOW_DELETED,
    payload: { id }
  }))
  .catch(({ status }) => dispatch({
    type: DELETE_SHOW_FAILED,
    payload: { status, id }
  }))

export const getAllShows = () => (dispatch) => http
  .get("/shows")
  .then(response => dispatch({
    type: ALL_SHOWS_FETCHED,
    payload: response.data
  }))

export const createShow = ({date, venueId, name}) => dispatch => http
  .post("/shows", {date, venueId, name})
  .then(() => dispatch(getAllShows()))