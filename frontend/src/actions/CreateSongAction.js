import {declareForm} from "./FormActions";
import {getAllSongs} from "./GetAllSongs";

export const createSongForm = declareForm(
    "newSong",
    [
        {name: "id", required: true},
        {name: "name", required: true},
        {name: "type", required: true}
    ],
    "/music",
    getAllSongs
);