import { combineReducers } from "redux"
import { showsReducer, createShowForm, } from "../components/shows"
import { songsReducer } from "../components/music"
import { authForm, userAuthenticationReducer } from "../components/user"

import { createSongForm } from "../components/music"
import { bioReducer } from "../components/bio/BioReducer"
import { connectRouter } from "connected-react-router"
import { emailReducer } from "../components/contact"
import { venueReducer, venueFormOpen } from "../components/venue"

const userReducer = combineReducers({
  isAuthenticated: userAuthenticationReducer,
})

const rootReducer = (history) => combineReducers({
  email: emailReducer,
  shows: showsReducer,
  songs: songsReducer,
  newSong: createSongForm.reducer,
  newShow: createShowForm.reducer,
  authForm: authForm.reducer,
  venueFormOpen: venueFormOpen,
  user: userReducer,
  router: connectRouter(history),
  venues: venueReducer,
  bio: bioReducer
})

export default rootReducer
