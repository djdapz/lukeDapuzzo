import React from "react";

import {connect} from "react-redux";
import {createShowForm} from "../../actions/CreateShowActions";
import {LukeDatePicker, LukeSelect, LukeTextField, PopoutForm} from "../Multipurpose/FormComponents";
import NewVenueForm from "./NewVenueForm";

const NewShowFormPopout = (props) =>
    <PopoutForm {...props}>
        <LukeDatePicker
            value={props.newShow.date}
            onChange={props.update_date}
            label={"Date"}
        />
        <LukeSelect
            value={props.newShow.venueId}
            onChange={props.update_venueId}
            label="Venue"
            options={props.venues}
            optionToMenuItem={(venue) => ({value: venue.id, label: venue.name})}
        />
        <NewVenueForm/>
        <LukeTextField
            value={props.newShow.style}
            onChange={props.update_style}
            label={"Style"}
        />
    </PopoutForm>;


const mapStateToProps = (state) => ({venues: state.venues});

export default connect(mapStateToProps)(createShowForm.connect(NewShowFormPopout))