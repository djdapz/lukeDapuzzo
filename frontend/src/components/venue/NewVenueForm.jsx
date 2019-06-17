import React, { useState } from "react"
import Button from "@material-ui/core/Button/Button"
import Modal from "@material-ui/core/Modal/Modal"
import styled from "styled-components"
import { LukeTextField, StyledFormControl } from "../reusable"
import { useDispatch, useSelector } from "react-redux"
import { CLOSE_VENUE_FORM, createNewVenue, OPEN_VENUE_FORM } from "./VenueActions"

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
`

export const VenueForm = () => {
  const [name, setName] = useState("")
  const [googleMapsLink, setGoogleMapsLink] = useState("")
  const [city, setCity] = useState("")
  const [stateName, setStateName] = useState("")

  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.venueFormOpen)

  return <Modal
    open={isOpen}
    onClose={() => dispatch({ type: CLOSE_VENUE_FORM })}>
    <VenuePopup>
      <LukeTextField
        id={"venue-name"}
        value={name}
        onChange={setName}
        label={"Name"}
      />

      <LukeTextField
        id={"venue-link"}
        value={googleMapsLink}
        onChange={setGoogleMapsLink}
        label={"Google Maps Link"}
      />

      <LukeTextField
        id={"venue-city"}
        value={city}
        onChange={setCity}
        label={"City"}
      />
      <LukeTextField
        id={"venue-state"}
        value={stateName}
        onChange={setStateName}
        label={"State"}
      />

      <StyledFormControl>
        <Button
          id={"submit-venue"}
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(createNewVenue({ name, googleMapsLink, state: stateName, city }))
          }}>
          Send It
        </Button>
      </StyledFormControl>
    </VenuePopup>
  </Modal>
}

export const OpenNewVenueForm = () => {
  const dispatch = useDispatch()

  return <>
    <StyledFormControl>
      <Button
        id={"open-new-venue"}
        onClick={() => dispatch({ type: OPEN_VENUE_FORM })}>(New Venue)</Button>
    </StyledFormControl>


  </>
}

export default VenueForm