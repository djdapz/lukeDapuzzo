/**
 * Created by devondapuzzo on 9/22/17.
 */
import {GET_ALL_SHOWS} from "../actions/GetAllShowsAction";

let showsReducer = (state = [], action) =>{
    if(action.type === GET_ALL_SHOWS){
        return action.payload.data;
    }

    return state;
};

export default showsReducer;