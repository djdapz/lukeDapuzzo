import React from "react"

import { useSelector } from "react-redux"
import Table from "./TableComponent"
import "./shows.scss"

const ShowPage = () => {

  const dates = useSelector(store => store.shows)

  const previous = dates
    .filter(date => new Date(date.date) <= Date.now())
    .sort((a, b) => b.date - a.date)

  const upcoming =  dates
    .filter(date => new Date(date.date) > Date.now())
    .sort((a, b) => a.date - b.date)

  return <div id="show-page" className="main-content">
    <Table shows={upcoming} title="Upcoming"/>
    <Table shows={previous} title="Previous"/>
  </div>
}


export default ShowPage


