import React from "react"

import SongRow from "./SongRow"
import Paper from "@material-ui/core/Paper/Paper"

export default ({ type, songs }) =>
  <Paper>
    <div className="admin-table admin-table-content">
      <div className={"table-header"}>
        <h4>
          {type.display}s
        </h4>
      </div>
      <div className={"table-content"}>
        {songs.map(song => <SongRow key={song.id} details={song}
                                    type={type.api}/>)}
      </div>
    </div>
  </Paper>

