import {declareForm} from "./FormActions";
import {getAllSongs} from "./GetAllSongs";

export const createSongForm = declareForm({
    formName: "newSong",
    fields: [
        {name: "id", required: true},
        {name: "name", required: true},
        {name: "type", required: true}
    ],
    path: "/music",
    onSuccess: (dispatch) => dispatch(getAllSongs()),
    errorMessage: "There was an issue making your song, make sure you're not trying to create a duplicate"
});