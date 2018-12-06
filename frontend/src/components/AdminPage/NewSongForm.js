import React from 'react';
import {createSongForm} from "../../actions/CreateSongAction";
import {musicTypes} from "../../constants/musicTypes";
import {LukeSelect, LukeTextField, PopoutForm} from "../Multipurpose/FormComponents";

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

