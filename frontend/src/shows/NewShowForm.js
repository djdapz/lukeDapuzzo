import React from "react"

import { connect } from "react-redux"
import { LukeDatePicker, LukeSelect, LukeTextField, PopoutForm } from "../components/reusable/FormComponents"
import NewVenueForm, { OpenNewVenueForm } from "../shows/NewVenueForm"
import {createShowForm} from "../shows/ShowActions"

const NewShowFormPopout = (props) => {
  const { newShow, update_date, update_venueId, update_notes, venues } = props
  return <PopoutForm {...props} formName={"new-show"}>
    <LukeDatePicker
      value={newShow.date}
      onChange={update_date}
      label={"Date"}
    />
    <LukeSelect

      value={newShow.venueId}
      onChange={update_venueId}
      label="Venue"
      options={venues}
      optionToMenuItem={(venue) => ({ value: venue.id, label: venue.name })}
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

const mapStateToProps = (state) => ({ venues: state.venues })

export default connect(mapStateToProps)(createShowForm.connect(NewShowFormPopout))