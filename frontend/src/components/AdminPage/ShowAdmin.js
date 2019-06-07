import React from "react"

import { connect } from "react-redux"
import ShowRow from "./ShowRow"
import NewShowForm from "./NewShowForm"

const ShowAdmin = ({ shows }) =>
  <div>
    <NewShowForm/>
    {shows.map(show => <ShowRow key={JSON.stringify(show)}
                                show={show}/>)}
  </div>

function mapStateToProps (state) {
  return ({
    shows: state.shows.sort((a, b) => new Date(b.date) - new Date(a.date))
  })
}

export default connect(mapStateToProps)(ShowAdmin)