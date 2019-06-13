import { combineReducers } from "redux"
import showsReducer from "../shows/ShowsReducer"
import songsReducer from "../music/SongsReducer"
import userAuthenticationReducer from "../user/UserAuthenticationReducer"

import { venueReducer } from "../shows/VenueReducer"
import { createSongForm } from "../music/SongActions"
import { createShowForm } from "../shows/ShowActions"
import { authForm } from "../user/AuthFormAction"
import { bioReducer } from "../bio/BioReducer"
import { createVenueForm } from "../shows/VenueActions"
import { connectRouter } from "connected-react-router"
import emailReducer from "../contact/EmailReducer"

const userReducer = combineReducers({
  isAuthenticated: userAuthenticationReducer,
})

const rootReducer = (history) => combineReducers({
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
})

export default rootReducer
