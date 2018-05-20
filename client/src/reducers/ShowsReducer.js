/**
 * Created by devondapuzzo on 9/22/17.
 */
import {ALL_SHOWS_FETCHED} from "../actions/GetAllShows";

let showsReducer = (state = [], action) =>{
    if(action.type === ALL_SHOWS_FETCHED){
        return action.payload;
    }

    return state;
};

export default showsReducer;