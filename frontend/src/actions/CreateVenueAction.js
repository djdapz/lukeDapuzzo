import {declareForm} from "./FormActions";
import {getAllSongs} from "./GetAllSongs";
import {getAllVenues} from "./VenueActions";

export const createVenueForm = declareForm({
    formName: "newVenue",
    fields: [
        {name: "name", required: true},
        {name: "googleMapsLink", required: true},
        {name: "city", required: true},
        {name: "state", required: true}
    ],
    path: "/venues",
    onSuccess: (dispatch) => dispatch(getAllVenues()),
    errorMessage: "There was an issue making your song, make sure you're not trying to create a duplicate"
});