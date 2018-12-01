import {declareForm} from "./FormActions";
import {getAllShows} from "./GetAllShows";

export const createShowForm = declareForm({
        formName: "newShow",
        fields: [
            {name: "date", required: true},
            {name: "venueId", required: true},
            {name: "style", required: true}
        ],
        path: "/shows",
        onSuccess: (dispatch) => dispatch(getAllShows()),
        errorMessage: "There was an issue making your show"
    }
);