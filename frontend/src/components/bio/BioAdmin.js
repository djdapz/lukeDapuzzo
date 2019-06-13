import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Textarea from "@material-ui/core/InputBase/Textarea"
import { Button } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import styled from "styled-components"
import { saveBio } from "./BioActions"

const PaddedCard = styled(Card)`
    padding: 1rem;
`

export default () => {
  const bio = useSelector(state => state.bio)
  const dispatch = useDispatch()
  const [savedBio, setSavedBio] = useState(bio)

  return <PaddedCard>
    <Textarea onChange={it => setSavedBio(it.target.value)} value={savedBio}/>
    <Button color="primary" variant={"contained"} onClick={() => dispatch(saveBio(savedBio))}
            disabled={bio === savedBio}>Save</Button>
  </PaddedCard>
}
