import { combineReducers } from "redux"
import { showsReducer } from "../components/shows"
import { songsReducer } from "../components/music"
import { userAuthenticationReducer } from "../components/user"

import { bioReducer } from "../components/bio/BioReducer"
import { connectRouter } from "connected-react-router"
import { emailReducer } from "../components/contact"
import { venueReducer, venueFormOpen } from "../components/venue"

const userReducer = combineReducers({
  isAuthenticated: userAuthenticationReducer,
})

export const SET_MUSIC_FORM_OPEN = "SET_MUSIC_FORM_OPEN"
export const SET_SHOW_FORM_OPEN = "SET_MUSIC_FORM_OPEN"

const toggleReducer = (TYPE) => (state = false, action) => {
  if (action.type === TYPE) {
    return action.payload
  }
  return state
}

const rootReducer = (history) => combineReducers({
  email: emailReducer,
  shows: showsReducer,
  songs: songsReducer,
  venueFormOpen: venueFormOpen,
  showsFormOpen: toggleReducer(SET_SHOW_FORM_OPEN),
  musicFormOpen: toggleReducer(SET_MUSIC_FORM_OPEN),
  user: userReducer,
  router: connectRouter(history),
  venues: venueReducer,
  bio: bioReducer
})

export default rootReducer
