import React from "react";
import Button from "@material-ui/core/Button/Button";
import Modal from "@material-ui/core/Modal/Modal";
import styled from "styled-components";
import { createVenueForm } from "./VenueActions"
import { LukeTextField, StyledFormControl } from "../components/reusable/FormComponents"

const VenuePopup = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  height: 22rem;
  width: 25rem;
  padding: 1rem;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  background-color: white;
  :focus{
    outline: none;
  }
`;

export const OpenNewVenueForm = createVenueForm.connect((props) =>
    <StyledFormControl>
        <Button
            onClick={props.openForm}>(New Venue)</Button>
    </StyledFormControl>);


const NewVenueForm = (props) =>
    <Modal
        open={props.isOpen}
        onClose={props.closeForm}>
        <VenuePopup>
            <LukeTextField
                value={props.newVenue.name}
                onChange={props.update_name}
                label={"Name"}
            />

            <LukeTextField
                value={props.newVenue.googleMapsLink}
                onChange={props.update_googleMapsLink}
                label={"Google Maps Link"}
            />

            <LukeTextField
                value={props.newVenue.city}
                onChange={props.update_city}
                label={"City"}
            />
            <LukeTextField
                value={props.newVenue.state}
                onChange={props.update_state}
                label={"State"}
            />

            <StyledFormControl>
                <Button
                    disabled={!props.valid}
                    variant="contained"
                    color="primary"
                    onClick={props.submitForm}>
                    Send It
                </Button>
            </StyledFormControl>
        </VenuePopup>
    </Modal>

export default createVenueForm.connect(NewVenueForm)