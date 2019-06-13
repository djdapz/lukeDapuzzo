 import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { push } from "connected-react-router"

export default ({ callback, route }) => {

  const dispatch = useDispatch()
  const router = useSelector(store => store.router)

  const navigate = () => {
    callback()
    dispatch(push(route.href))
  }

  return <div key={route.name}
              className={`menubar-row ${route.href === router.location.pathname && " menubar-active"}`}
              onClick={navigate}>
    <h3 className="menubar-link"> {route.name}</h3>
  </div>
}

