import React from "react"
import MusicRow from "./MusicRow"
import MusicComponent from "../MusicComponent"

const toUrl = (id) => `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`

const SoundcloudRow = ({ songs }) =>
  <MusicRow label={"soundcloud"}>
    {songs.map(song =>
      <MusicComponent
        url={toUrl(song.id)}
        key={song.id}/>)
    }
  </MusicRow>

export default SoundcloudRow