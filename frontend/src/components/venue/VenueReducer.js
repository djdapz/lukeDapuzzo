import { ALL_VENUES_FETCHED, CLOSE_VENUE_FORM, OPEN_VENUE_FORM } from "./VenueActions"

export const venueReducer = (state = [], action) => {
    if (action.type === ALL_VENUES_FETCHED) {
        return action.payload.venues
    }
    return state
}


export const venueFormOpen = (state = false, action) => {

    if (action.type === OPEN_VENUE_FORM) {
        return true
    }

    if (action.type === CLOSE_VENUE_FORM) {
        return false
    }

    return state
}