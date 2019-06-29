import React, { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { LukeDatePicker, LukeSelect, LukeTextField, PopoutForm } from "../reusable"
import { createShow } from "../shows/ShowActions"
import { NewVenueForm, OpenNewVenueForm } from "../venue"
import { SET_SHOW_FORM_OPEN } from "../../App/createRootReducer"

const NewShowFormPopout = () => {

  const [date, setDate] = useState("")
  const [venueId, setVenueId] = useState("")
  const [notes, setNotes] = useState("")

  const venues = useSelector(state => state.venues)
  const open = useSelector(state => state.showsFormOpen)
  const dispatch = useDispatch()

  const valid = date && venueId

  return <PopoutForm valid={valid}
                     open={open}
                     setOpen={(open) => {
                       debugger
                       return dispatch({ type: SET_SHOW_FORM_OPEN, payload: open }) }}
                     submitForm={() => dispatch(createShow({ date, venueId, notes }))}
                     formName={"new-show"}>
    <LukeDatePicker
      id={"new-show-date"}
      value={date}
      onChange={setDate}
      label={"Date"}
    />
    <LukeSelect
      id={"select-venue"}
      value={venueId}
      onChange={setVenueId}
      label="Venue"
      options={venues}
      optionToMenuItem={(venue) => ({ value: venue.id, label: venue.name })}
      renderWhenNoOptions={() => <OpenNewVenueForm/>}
    />
    <LukeTextField
      multiline
      rows={3}
      value={notes}
      onChange={setNotes}
      label={"Notes"}
    />
    <NewVenueForm/>
  </PopoutForm>
}

export default NewShowFormPopout