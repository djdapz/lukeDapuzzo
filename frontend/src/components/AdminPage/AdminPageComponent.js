import React, { useEffect } from 'react';
import { AdminRoutes } from "../../routing/AdminRoutes"
import { useDispatch, useSelector } from "react-redux"
import { getAllVenues } from "../../actions/VenueActions"

export default () => {
  const dispatch = useDispatch()
  const path = useSelector(state => state.router.location.pathname)

  useEffect(() => {
    dispatch(getAllVenues())
  }, [dispatch])

  return (
    <div id="admin-page"
         className="main-content">
      {AdminRoutes.toLinks(path)}
      {AdminRoutes.renderRedirect()}
      {AdminRoutes.toRoutes()}
    </div>
  )
}