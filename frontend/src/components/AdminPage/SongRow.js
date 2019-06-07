import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button/Button"
import { deleteSong } from "../../actions/SongActions"

const SongRow = ({ details, deleteSong, type }) => {


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
        <Button variant={"outlined"} color={"secondary"} className="btn btn-danger" onClick={() => deleteSong(details.id, type)}>
          <FontAwesomeIcon icon={["fa", "trash"]}/>
        </Button>
      </div>
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ deleteSong }, dispatch)
}

export default connect(null, mapDispatchToProps)(SongRow)





