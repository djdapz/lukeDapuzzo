import { useSelector } from "react-redux"
import ReactGA from "react-ga"
import React from 'react'

export default () => {
  const route = useSelector(store =>  store.router.location.pathname)

  ReactGA.pageview(route)
  return <>HI</>
}