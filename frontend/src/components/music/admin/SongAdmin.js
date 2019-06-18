import React from "react"
import { musicTypes } from "../../../constants/musicTypes"
import NewSongForm from "./NewSongForm"
import SongTable from "./SongTableComponent"
import { useSelector } from "react-redux"

export default () => {
  const songs = useSelector(state => state.songs)

  const songsByType =
    songs.length && musicTypes
      .map(type => ({
        "type": type,
        "songs": songs.filter(song => song.type === type.api)
      }))
      .filter(songList => songList.songs.length)

  return <div>
    <NewSongForm/>
    {songsByType.map(songList =>
      <SongTable key={songList.type.api}
                 songs={songList.songs}
                 type={songList.type}/>)}
  </div>

}