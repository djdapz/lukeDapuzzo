import React from "react"
import { musicTypes } from "../../../constants/musicTypes"
import { LukeSelect, LukeTextField, PopoutForm } from "../../reusable"
import {createSongForm} from "../SongActions"

const NewSongFormPopout = (props) =>
  <PopoutForm {...props} formName={"new-song"}>
    <LukeSelect
      id={"select-song-type"}
      value={props.newSong.type}
      onChange={props.update_type}
      label="Type"
      options={musicTypes}
      optionToMenuItem={(musicType) => ({ value: musicType.api, label: musicType.display })}
    />
    <LukeTextField
      id={"new-song-name"}
      value={props.newSong.name}
      onChange={(thing) => props.update_name(thing)}
      label={"Name"}
    />
    <LukeTextField
      id={"new-song-id"}
      value={props.newSong.id}
      onChange={props.update_id}
      label={"Id"}
    />
  </PopoutForm>

export default createSongForm.connect(NewSongFormPopout)

