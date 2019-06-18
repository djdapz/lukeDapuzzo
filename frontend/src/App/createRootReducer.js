import { combineReducers } from "redux"
import { showsReducer, createShowForm, } from "../components/shows"
import { songsReducer } from "../components/music"
import { userAuthenticationReducer } from "../components/user"

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
  newShow: createShowForm.reducer,
  venueFormOpen: venueFormOpen,
  user: userReducer,
  router: connectRouter(history),
  venues: venueReducer,
  bio: bioReducer
})

export default rootReducer
