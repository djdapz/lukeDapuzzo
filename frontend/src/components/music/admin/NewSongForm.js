import React, { useState } from "react"
import { musicTypes } from "../../../constants/musicTypes"
import { LukeSelect, LukeTextField, PopoutForm } from "../../reusable"
import { createSong } from "../SongActions"
import { useDispatch, useSelector } from "react-redux"
import { SET_MUSIC_FORM_OPEN } from "../../../App/createRootReducer"

const NewSongFormPopout = () => {
  const [type, setType] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const dispatch = useDispatch()
  const open = useSelector(state => state.musicFormOpen)

  const isValid = type && name && id

  return <PopoutForm valid={isValid}
                     setOpen={(payload) => dispatch({ type: SET_MUSIC_FORM_OPEN, payload })}
                     open={open}
                     submitForm={() => dispatch(createSong({ id, name, type }))}
                     formName={"new-song"}>
    <LukeSelect
      id={"select-song-type"}
      value={type}
      onChange={setType}
      label="Type"
      options={musicTypes}
      optionToMenuItem={(musicType) => ({ value: musicType.api, label: musicType.display })}
    />
    <LukeTextField
      id={"new-song-name"}
      value={name}
      onChange={setName}
      label={"Name"}
    />
    <LukeTextField
      id={"new-song-id"}
      value={id}
      onChange={setId}
      label={"Id"}
    />
  </PopoutForm>
}

export default NewSongFormPopout

