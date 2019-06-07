import { declareForm } from "./FormActions"

import Api from "../api/Api"

export const ALL_SHOWS_FETCHED = "ALL_SHOWS_FETCHED"

export const SHOW_DELETED = "SHOW_DELETED"
export const DELETE_SHOW_FAILED = "DELETE_SHOW_FAILED"

export const deleteShow = (id) => (dispatch) => Api
  .delete(`/shows/${id}`)
  .then(() => dispatch({
    type: SHOW_DELETED,
    payload: { id }
  }))
  .catch(({ status }) => dispatch({
    type: DELETE_SHOW_FAILED,
    payload: { status, id }
  }))

export const getAllShows = () => (dispatch) => Api
  .get("/shows")
  .then(response => dispatch({
    type: ALL_SHOWS_FETCHED,
    payload: response.data
  }))

export const createShowForm = declareForm({
    formName: "newShow",
    fields: [
      { name: "date", required: true },
      { name: "venueId", required: true },
      { name: "notes", required: false }
    ],
    path: "/shows",
    onSuccess: (dispatch) => dispatch(getAllShows()),
    errorMessage: "There was an issue making your show"
  }
)