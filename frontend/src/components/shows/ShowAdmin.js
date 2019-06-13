import React from "react"

import { useSelector } from "react-redux"
import ShowRow from "./ShowRow"
import NewShowForm from "../shows/NewShowForm"

const sortedShows = state => state.shows.sort((a, b) => new Date(b.date) - new Date(a.date))

export default () => {
  const shows = useSelector(sortedShows)

  return <div>
    <NewShowForm/>
    {shows.map(show => <ShowRow key={JSON.stringify(show)}
                                show={show}/>)}
  </div>
}