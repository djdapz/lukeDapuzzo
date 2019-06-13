import { withStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl/FormControl"
import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers"
import InputLabel from "@material-ui/core/InputLabel/InputLabel"
import Select from "@material-ui/core/Select/Select"
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"
import TextField from "@material-ui/core/TextField/TextField"
import React from "react"

import LuxonUtils from "@date-io/luxon"
import styled from "styled-components"
import Button from "@material-ui/core/Button/Button"
import Drawer from "@material-ui/core/Drawer/Drawer"
import AddIcon from "@material-ui/icons/Add"
import ClearIcon from "@material-ui/icons/Clear"

export const NewFormStyled = styled.div`
  padding: .5rem  1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 15rem;
   align-items: flex-end;
`

export const BottomButton = withStyles({
    root: {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      zIndex: "1000"
    }
  }
)(Button)

export const StyledFormControl = withStyles({
  root: {
    marginTop: ".5rem",
    marginBottom: ".5rem",
    width: "100%"
  }
})(FormControl)

const ErrorMessage = styled.div`
  margin: .5rem;
  color: #400000;
  background-color: rgba(255,0,0,0.14);
  border: #400000 1px solid ;
  border-radius: 3px;
  padding: .5rem;
`

const MaybeError = (props) => props.error ? <ErrorMessage>{props.error}</ErrorMessage> : ""

export const PopoutForm = ({ isOpen, children, valid, submitForm, error, openForm, closeForm, formName }) =>
  <div>
    <BottomButton variant="fab"
                  color="primary"
                  id={`open-${formName}`}
                  onClick={openForm}
                  aria-label="Add">
      <AddIcon/>
    </BottomButton>
    <Drawer anchor="right"
            open={isOpen}
            onClose={closeForm}>
      <NewFormStyled>
        {children}
        <StyledFormControl>
          <Button
            disabled={!valid}
            variant="contained"
            color="primary"
            onClick={submitForm}>
            Send It
          </Button>
        </StyledFormControl>
        <MaybeError error={error}/>
        <BottomButton
          id={`close-${formName}`}
          variant="fab"
          color="primary"
          onClick={closeForm}>
          <ClearIcon/>
        </BottomButton>
      </NewFormStyled>
    </Drawer>
  </div>

export const LukeDatePicker = (props) =>
  <StyledFormControl>
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <div className="picker">
        <InlineDatePicker
          keyboard
          variant="outlined"
          label={props.label}
          value={props.value === "" ? null : props.value}
          onChange={val => {
            return props.onChange(val.toSQLDate())
          }}
          format="MM-dd-yyyy"
          mask={[/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
        />
      </div>
    </MuiPickersUtilsProvider>
  </StyledFormControl>

export const LukeSelect = ({
                             id,
                             value,
                             onChange,
                             options,
                             optionToMenuItem,
                             renderWhenNoOptions,
                             label
                           }) => <StyledFormControl variant="outlined" id={id}>
  <InputLabel htmlFor={`${label}-input`}>
    {label}
  </InputLabel>
  <Select
    value={value}
    onChange={(event) => onChange(event.target.value)}
    input={
      <OutlinedInput
        labelWidth={label.length * 10}
        name={label}
        id={`${label}-input`}
      />
    }>
    {renderWhenNoOptions
      ? <MenuItem value={""}> {renderWhenNoOptions()}</MenuItem>
      : ""
    }
    <MenuItem value="">
      <em>None</em>
    </MenuItem>

    {options.map(optionToMenuItem).map(option =>
      <MenuItem key={option.value}
                value={option.value}>{option.label}</MenuItem>)}
  </Select>
</StyledFormControl>

export const LukeTextField = (props) => {
  const { onChange, ...rest } = props
  return <StyledFormControl>
    <TextField variant={"outlined"}
               onChange={(event) => onChange(event.target.value)}
               {...rest}
    />
  </StyledFormControl>
}