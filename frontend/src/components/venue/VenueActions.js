import { http } from "../../api"
import { declareForm } from "../../FormActions"
import { createShowForm } from "../shows"

export const ALL_VENUES_FETCHED = "ALL_VENUES_FETCHED"

export const getAllVenues = () => (dispach) => http.get("/venues")
  .then(response => dispach({
    type: ALL_VENUES_FETCHED,
    payload: response.data
  }))


// export const createNewVenue = ({name, googleMapsLink, city, state}) => (dispatch) => http
//   .post("/venues", {name, googleMapsLink, city, state})
//   .then((response) => dispatch(updateVenueAction()))
  // .post()

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