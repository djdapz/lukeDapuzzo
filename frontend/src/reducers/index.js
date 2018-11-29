import {combineReducers} from 'redux';
import routeReducer from "./RouteReducer";
import emailReducer from "./EmailReducer";
import showsReducer from "./ShowsReducer";
import songsReducer from "./SongsReducer";
import userAuthenticationReducer from "./UserAuthenticationReducer";
import {loginFormReducer} from "./LoginFormReducer";

import {routerReducer} from 'react-router-redux'
import {createShowForm} from "../actions/CreateShowActions";
import {venueReducer} from "./VenueReducer";
import {createSongForm} from "../actions/CreateSongAction";

const userReducer = combineReducers({
    isAuthenticated: userAuthenticationReducer,
    loginState: loginFormReducer
});

const rootReducer = combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer,
    songs: songsReducer,
    newSong: createSongForm.reducer,
    newShow: createShowForm.reducer,
    user: userReducer,
    router: routeReducer,
    reduxRouter: routerReducer,
    venues: venueReducer
});

export default rootReducer;
