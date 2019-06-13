import React from "react"
import Image from "./outside_picture.jpg"
import Paper from "@material-ui/core/Paper/Paper"
import { useSelector } from "react-redux"
import "./bio.scss"

export default () => {
  const bio = useSelector(state => state.bio)
  return <div id="bio-page"
              className="main-content">
    <div id={"bio-content"}>
      <img src={Image}
           alt={"Luke preforming guitar, drums, and singing"}/>
      <Paper className="bio">
        {bio.split("\n").map(it => <p>{it}</p>)}
      </Paper>
    </div>
  </div>
};