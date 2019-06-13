import React from "react"
import { musicTypes } from "../../../constants/musicTypes"
import NewSongForm from "./NewSongForm"
import SongTable from "./SongTableComponent"
import { useSelector } from "react-redux"

export default () => {
  const songs = useSelector(state => state.songs)

  const renderTableForAllTypes = () => {
    if (songs && songs.length > 0) {
      return musicTypes
        .map(type => {
          return {
            "type": type,
            "songs": songs.filter(song => song.type === type.api)
          }
        })
        .filter(songList => songList.songs.length > 0)
        .map(songList => <SongTable key={songList.type}
                                    songs={songList.songs}
                                    type={songList.type}/>)
    }

  }

  return <div>
    <NewSongForm/>
    {renderTableForAllTypes()}
  </div>

}