import React from "react"
import { SPOTIFY_ALBUM } from "../../constants/musicTypes"
import MusicRow from "./MusicRow"
import MusicComponent from "../MusicComponent"

const SpotifyMusic = ({ song }) => {
  const type = song.type === SPOTIFY_ALBUM ? "album" : "track"
  let s = `https://embed.spotify.com/?uri=spotify:${type}:${song.id}&theme=white`
  return <MusicComponent url={s} key={song.id}/>
}

const SpotifyRow = ({ songs }) =>
  <MusicRow label={"spotify"}>
    {songs.map(it => <SpotifyMusic song={it}/>)}
  </MusicRow>

export default SpotifyRow