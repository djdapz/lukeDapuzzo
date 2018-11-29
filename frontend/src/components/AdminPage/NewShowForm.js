import React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Button from "@material-ui/core/Button/Button";

import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import {withStyles} from "@material-ui/core";

import {connect} from "react-redux";
import {createShowForm} from "../../actions/CreateShowActions";
import {bindActionCreators} from "redux";
import {
    BottomButton,
    LukeDatePicker,
    LukeSelect,
    LukeTextField, NewFormStyled, PopoutForm,
    StyledFormControl
} from "../Multipurpose/FormComponents";

const NewShowFormPopout = (props) =>
    <PopoutForm openForm={props.openForm}
                closeForm={props.closeForm}
                submitForm={props.submitForm}
                isValid={props.newShow.valid}
                isOpen={props.newShow.isOpen}>
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
        <LukeTextField
            value={props.newShow.style}
            onChange={props.update_style}
            label={"Style"}
        />
    </PopoutForm>;


const mapStateToProps = (state) => ({venues: state.venues});

export default connect(mapStateToProps)(createShowForm.connect(NewShowFormPopout))