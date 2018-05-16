import {store} from "../config/reduxConfig";
import axios from "axios";
import {LUKE_API} from "../config/appConfig"
import {getAllSongsAction} from "../actions/GetAllSongsAction";


const getAllSongs = function () {
    axios.get(`${LUKE_API}/api/songs`)
        .then(function (response) {
            store.dispatch(getAllSongsAction(response));
        })
        .catch(function (error) {
           console.log("error reaching songs api")
        });
};

export {
    getAllSongs
}