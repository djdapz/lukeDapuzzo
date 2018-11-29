import {withStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl/FormControl";
import {InlineDatePicker, MuiPickersUtilsProvider} from "material-ui-pickers";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import React from "react";

import LuxonUtils from '@date-io/luxon';
import styled from "styled-components";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Drawer from "@material-ui/core/Drawer/Drawer";


export const NewFormStyled = styled.div`
  padding: .5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const BottomButton = withStyles({
        root: {
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: "1000"
        }
    }
)(Button);


export const StyledFormControl = withStyles({
    root: {
        margin: ".5rem"
    }
})(FormControl);


export const PopoutForm = (props) =>
    <div>
        <BottomButton variant="fab"
                      color="primary"
                      onClick={props.openForm}
                      aria-label="Add">
            <AddIcon/>
        </BottomButton>
        <Drawer anchor="right"
                open={props.isOpen}>
            <NewFormStyled>
                {props.children}
                <StyledFormControl>
                    <Button
                        disabled={!props.isValid}
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
            </NewFormStyled>
        </Drawer>
    </div>;

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
                        return props.onChange(val.toSQLDate());
                    }}
                    format="MM-dd-yyyy"
                    mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                />
            </div>
        </MuiPickersUtilsProvider>
    </StyledFormControl>;

export const LukeSelect = (props) => <StyledFormControl variant="outlined">
    <InputLabel htmlFor={`${props.label}-input`}>
        {props.label}
    </InputLabel>
    <Select
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        input={
            <OutlinedInput
                labelWidth={props.label.length * 10}
                name={props.label}
                id={`${props.label}-input`}
            />
        }
    >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {props.options.map(props.optionToMenuItem).map(option =>
            <MenuItem value={option.value}>{option.label}</MenuItem>)}
    </Select>
</StyledFormControl>;

export const LukeTextField = (props) => <StyledFormControl>
    <TextField variant={"outlined"}
               label={props.label}
               value={props.value}
               onChange={(event) => props.onChange(event.target.value)}
    />
</StyledFormControl>;