import { http } from "../../api"

export const ALL_VENUES_FETCHED = "ALL_VENUES_FETCHED"
export const OPEN_VENUE_FORM = "OPEN_VENUE_FORM"
export const CLOSE_VENUE_FORM = "CLOSE_VENUE_FORM"

export const getAllVenues = () => (dispatch) => http.get("/venues")
  .then(response => dispatch({
    type: ALL_VENUES_FETCHED,
    payload: response.data
  }))

export const createNewVenue = ({ name, googleMapsLink, city, state }) => (dispatch) => http
  .post("/venues", { name, googleMapsLink, city, state })
  .then(() => dispatch(getAllVenues()))
  .then(() => dispatch({type: CLOSE_VENUE_FORM}))
