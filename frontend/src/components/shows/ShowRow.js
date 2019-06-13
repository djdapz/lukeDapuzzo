import React from "react"
import { useDispatch } from "react-redux"

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button/Button"
import Card from "@material-ui/core/Card/Card"
import styled from "styled-components"
import { deleteShow } from "./ShowActions"

const ShowCard = styled(Card)`
  margin: .5rem 0;
  padding: .5rem;
  display: flex;
`

const ShowColumn = styled.div`
  margin: 0 1rem;
`

const LeftPane = styled(ShowColumn)`
  width: 11rem;
  min-width: 11rem;
`

const ListRow = styled.div`
  padding: .5rem 0;
`

const Notes = styled(ShowColumn)`
flex-grow: 1;
`

const ButtonSlot = styled(ShowColumn)`
  width: 4rem;
  min-width: 4rem;
`

export default ({ show }) => {
  const dispatch = useDispatch()

  return <ShowCard className={"admin-listing"}>

    <LeftPane>
      <ListRow>{show.date}</ListRow>
      <ListRow>{show.venueName}</ListRow>
      <ListRow>{show.cityString}</ListRow>
    </LeftPane>
    <Notes>
      {show.notes}
    </Notes>
    <ButtonSlot>
      <Button variant={"outlined"}
              color={"secondary"}
              className="btn btn-danger"
              onClick={() => dispatch(deleteShow(show.id))}>
        <FontAwesomeIcon icon={["fa", "trash"]}/>
      </Button>
    </ButtonSlot>
  </ShowCard>

}