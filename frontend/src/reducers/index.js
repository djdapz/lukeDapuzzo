import { combineReducers } from "redux"
import routeReducer from "./RouteReducer"
import emailReducer from "./EmailReducer"
import showsReducer from "./ShowsReducer"
import songsReducer from "./SongsReducer"
import userAuthenticationReducer from "./UserAuthenticationReducer"

import { venueReducer } from "./VenueReducer"
import { createSongForm } from "../actions/SongActions"
import { createShowForm } from "../actions/ShowActions"
import { authForm } from "../actions/AuthFormAction"
import { bioReducer } from "./BioReducer"
import { createVenueForm } from "../actions/VenueActions"
import { connectRouter } from 'connected-react-router'

const userReducer = combineReducers({
    isAuthenticated: userAuthenticationReducer,
});

const rootReducer = (history) =>  combineReducers({
    route: routeReducer,
    email: emailReducer,
    shows: showsReducer,
    songs: songsReducer,
    newSong: createSongForm.reducer,
    newShow: createShowForm.reducer,
    newVenue: createVenueForm.reducer,
    authForm: authForm.reducer,
    user: userReducer,
    router: connectRouter(history),
    venues: venueReducer,
    bio: bioReducer
});

export default rootReducer;
