import { http } from "../api"
import { declareForm } from "../actions/FormActions"
import { createShowForm } from "./ShowActions"

export const ALL_VENUES_FETCHED = "ALL_VENUES_FETCHED"
export const GET_ALL_VENUES = "GET_ALL_VENUES"

export const getAllVenues = () => (dispach) => http.get("/venues")
  .then(response => dispach({
    type: ALL_VENUES_FETCHED,
    payload: response.data
  }))


export const createVenueForm = declareForm({
  formName: "newVenue",
  fields: [
    { name: "name", required: true },
    { name: "googleMapsLink", required: true },
    { name: "city", required: true },
    { name: "state", required: true }
  ],
  path: "/venues",
  onSuccess: (dispatch, getState, responseData) => {
    const updateVenueAction = createShowForm.actions.update_venueId
    dispatch(updateVenueAction(responseData))
    dispatch(getAllVenues())
  },
  errorMessage: "There was an issue making your song, make sure you're not trying to create a duplicate"
})