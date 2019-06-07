import {declareForm} from "./FormActions";
import {getAllVenues} from "./VenueActions";
import {createShowForm} from "./ShowActions"

export const createVenueForm = declareForm({
    formName: "newVenue",
    fields: [
        {name: "name", required: true},
        {name: "googleMapsLink", required: true},
        {name: "city", required: true},
        {name: "state", required: true}
    ],
    path: "/venues",
    onSuccess: (dispatch, getState, responseData) => {
        const updateVenueAction = createShowForm.actions.update_venueId;
        dispatch(updateVenueAction(responseData));
        dispatch(getAllVenues());
    },
    errorMessage: "There was an issue making your song, make sure you're not trying to create a duplicate"
});