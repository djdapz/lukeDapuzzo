import React from "react"
import { useSelector } from "react-redux"
import SpotifyRow from "./row/SpotifyRow"
import SoundcloudRow from "./row/SoundcloudRow"
import { SOUNDCLOUD_SONG, SPOTIFY_ALBUM, SPOTIFY_SONG } from "../../constants/musicTypes"
import "./music.scss"

const MusicPage = () => {
  const spotifySongs = useSelector(state => state.songs.filter(song => song.type === SPOTIFY_SONG || song.type === SPOTIFY_ALBUM))
  const soundcloudSongs = useSelector(state => state.songs.filter(song => song.type === SOUNDCLOUD_SONG))

  return <div id="music-page" className="main-content">
    {spotifySongs.length > 0 && <SpotifyRow songs={spotifySongs}/>}
    {soundcloudSongs.length > 0 && <SoundcloudRow songs={soundcloudSongs}/>}
  </div>

}

export default (MusicPage)