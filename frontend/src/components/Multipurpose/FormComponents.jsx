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

export const StyledFormControl = withStyles({
    root: {
        margin: ".5rem"
    }
})(FormControl);

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
               label={"Style"}
               value={props.value}
               onChange={(event) => props.onChange(event.target.value)}
    />
</StyledFormControl>;