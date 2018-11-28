// export const SONG_FORM_CHANGE_ID = "SONG_FORM_CHANGE_ID";
// export const SONG_FORM_CHANGE_NAME = "SONG_FORM_CHANGE_NAME";
// export const SONG_FORM_CHANGE_TYPE = "SONG_FORM_CHANGE_TYPE";
//
// export const songFormChangeId = (id) => ({type: SONG_FORM_CHANGE_ID, payload: id});
// export const songFormChangeName = (name) => ({type: SONG_FORM_CHANGE_NAME, payload: name});
// export const songFormChangeType = (type) => ({type: SONG_FORM_CHANGE_TYPE, payload: type});
//
// export const declareFormActions = (formName, fields()) => {
//
//     return {
//         actions:
//     }
// }

import {declareForm} from "./FormActions";
import {getAllShows} from "./GetAllShows";

export const createShowForm = declareForm(
    "newShow",
    [
        {name: "date", required: true},
        {name: "venueId", required: true},
        {name: "style", required: true}
    ],
    "/shows",
    getAllShows
);