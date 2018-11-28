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
import {LukeDatePicker, LukeSelect, LukeTextField, StyledFormControl} from "../Multipurpose/FormComponents";

const NewShowFormStyled = styled.div`
  padding: .5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const BottomButton = withStyles({
        root: {
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: "1000"
        }
    }
)(Button);


const NewShowFormPopout = (props) => {
    return <div>
        <BottomButton variant="fab"
                      color="primary"
                      onClick={props.openForm}
                      aria-label="Add">
            <AddIcon/>
        </BottomButton>
        <Drawer anchor="right"
                open={props.newShow.isOpen}>
            <NewShowFormStyled>
                <LukeDatePicker
                    value={props.newShow.date}
                    onChange={props.updateDate}
                    label={"Date"}
                />
                <LukeSelect
                    value={props.newShow.venueId}
                    onChange={props.updateVenue}
                    label="Venue"
                    options={props.venues}
                    optionToMenuItem={(venue) => ({value: venue.id, label: venue.name})}
                />
                <LukeTextField
                    value={props.newShow.style}
                    onChange={props.updateStyle}
                    label={"Style"}
                />
                <StyledFormControl>
                    <Button
                        disabled={!props.newShow.valid}
                        variant="contained"
                        color="primary"
                        onClick={props.submitForm}>
                        Send It
                    </Button>
                </StyledFormControl>
                <BottomButton
                    variant="fab"
                    color="primary"
                    onClick={props.closeForm}>
                    <ClearIcon/>
                </BottomButton>
            </NewShowFormStyled>
        </Drawer>
    </div>;
};


const mapStateToProps = (state) => {
    return ({
        venues: state.venues,
        newShow: state.newShow,
    });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
        updateVenue: createShowForm.actions.venueId,
        updateDate: createShowForm.actions.date,
        updateStyle: createShowForm.actions.style,
        submitForm: createShowForm.submitForm,
        openForm: createShowForm.openForm,
        closeForm: createShowForm.closeForm
    }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(NewShowFormPopout)
