import React, { useState } from "react"
import { musicTypes } from "../../../constants/musicTypes"
import { LukeSelect, LukeTextField, PopoutForm } from "../../reusable"
import { createSong } from "../SongActions"
import { useDispatch } from "react-redux"

const NewSongFormPopout = () => {
  const [type, setType] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const dispatch = useDispatch()

  const isValid = type && name && id

  return <PopoutForm valid={isValid}
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

