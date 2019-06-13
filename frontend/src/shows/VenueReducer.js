import { ALL_VENUES_FETCHED } from "./VenueActions"

export const venueReducer = (state = [], action) => {
    if (action.type === ALL_VENUES_FETCHED) {
        return action.payload.venues
    }
    return state
}