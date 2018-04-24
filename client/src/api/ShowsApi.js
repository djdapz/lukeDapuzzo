import {store} from "../config/reduxConfig";
import axios from "axios";
import {LUKE_API} from "../config/appConfig"
import {getAllShowsAction} from "../actions/GetAllShowsAction";


const getAllShows = function () {

    axios.get(LUKE_API + "/api/shows")
        .then(function (response) {
            store.dispatch(getAllShowsAction(response));
        })
        .catch(function (error) {
            console.log(error);
        });
};

export {
    getAllShows
}