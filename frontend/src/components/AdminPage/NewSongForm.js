import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSongForm} from "../../actions/CreateSongAction";
import {musicTypes} from "../../constants/musicTypes";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {withStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer/Drawer";
import {
    BottomButton,
    LukeSelect,
    LukeTextField,
    NewFormStyled, PopoutForm,
    StyledFormControl
} from "../Multipurpose/FormComponents";
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

const NewSongFormPopout = (props) =>
    <PopoutForm {...props}>
        <LukeSelect
            value={props.newSong.type}
            onChange={props.update_type}
            label="Type"
            options={musicTypes}
            optionToMenuItem={(musicType) => ({value: musicType.api, label: musicType.display})}

        />
        <LukeTextField
            value={props.newSong.name}
            onChange={(thing) => props.update_name(thing)}
            label={"Name"}
        />
        <LukeTextField
            value={props.newSong.id}
            onChange={props.update_id}
            label={"Id"}
        />
    </PopoutForm>;


export default createSongForm.connect(NewSongFormPopout)

