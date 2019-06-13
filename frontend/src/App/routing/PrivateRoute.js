import React from "react"
import { Redirect, Route } from "react-router"
import { useSelector } from "react-redux"

export default (props) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  if (isAuthenticated) {
    const rest = { ...props }
    delete rest.component
    return <Route exact {...rest} component={props.component}/>
  }
  return <Redirect to={{
    pathname: "/login",
    state: { from: props.location }
  }}/>
}
