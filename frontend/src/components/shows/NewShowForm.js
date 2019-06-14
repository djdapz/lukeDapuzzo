import React from "react"

import {useSelector} from "react-redux"
import {LukeDatePicker, LukeSelect, LukeTextField, PopoutForm} from "../reusable"
import {createShowForm} from "../shows/ShowActions"
import {NewVenueForm, OpenNewVenueForm} from "../venue"


const NewShowFormPopout = (props) => {
  const {newShow, update_date, update_venueId, update_notes} = props
  const venues = useSelector(state => state.venues)

  return <PopoutForm {...props} formName={"new-show"}>
    <LukeDatePicker
      value={newShow.date}
      onChange={update_date}
      label={"Date"}
    />
    <LukeSelect
      id={"select-venue"}
      value={newShow.venueId}
      onChange={update_venueId}
      label="Venue"
      options={venues}
      optionToMenuItem={(venue) => ({value: venue.id, label: venue.name})}
      renderWhenNoOptions={() => <OpenNewVenueForm/>}
    />
    <LukeTextField
      multiline
      rows={3}
      value={newShow.notes}
      onChange={update_notes}
      label={"Notes"}
    />
    <NewVenueForm/>
  </PopoutForm>
}


export default createShowForm.connect(NewShowFormPopout)