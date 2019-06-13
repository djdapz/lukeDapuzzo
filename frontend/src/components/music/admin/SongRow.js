import React from "react"
import { useDispatch } from "react-redux"

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button/Button"
import { deleteSong } from "../SongActions"

export default ({ details, type }) => {
  const dispatch = useDispatch()
  return (
    <div className="admin-listing">
      <div className="name-column  song-column">
        <p>
          {details.name}
        </p>
      </div>
      <div className="id-column  song-column">
        <p>
          {details.id}
        </p>
      </div>
      <div className={"action-column  song-column"}>
        <Button variant={"outlined"} color={"secondary"} className="btn btn-danger"
                onClick={() => dispatch(deleteSong(details.id, type))}>
          <FontAwesomeIcon icon={["fa", "trash"]}/>
        </Button>
      </div>
    </div>
  )
}





