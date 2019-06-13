import React, { useEffect, useState } from "react"

import { useDispatch } from "react-redux"
import routes from "../../constants/routes"
import { Menubar } from "./MenuBarContainer"
import { push } from "connected-react-router"
import { getAllSongs } from "../../components/music"
import Button from "@material-ui/core/Button/Button"
import MenuIcon from "@material-ui/icons/Menu"
import { getBio } from "../../components/bio"
import { useSelector } from "react-redux"
import { getAllShows } from "../shows"
import "./header.scss"

const HomeLink = ({ setCollapsed, route }) => {
  const dispatch = useDispatch()
  const titleClassName = "title" + (route.location && route.location.pathname === routes.HOME.href ? " title-active" : "")

  return <div
    onClick={() => {
      setCollapsed("true")
      dispatch(push("/"))
    }}
    className={titleClassName}>
    <img src={"/header.png"}
         alt={"Luke Dapuzzo"}/>
  </div>
}

const HeaderBar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const dispatch = useDispatch()
  const route = useSelector(state => state.router)

  useEffect(() => {
    dispatch(getAllShows())
    dispatch(getAllSongs())
    dispatch(getBio())
  }, [dispatch])

  return <div>
    <div className="row header-bar">
      <div className="title-container">
        <HomeLink route={route} setCollapsed={setCollapsed}/>
        {
          route.location
          && route.location.pathname === routes.HOME.href
          && <h5 className="sub-title">A solo songwriter and musician from Boulder, Colorado</h5>
        }
      </div>
      <Button onClick={() => setCollapsed(!collapsed)}
              id={"social-media-hamburger"}
              aria-label="Add">
        <MenuIcon/>
      </Button>
    </div>
    <Menubar isCollapsed={collapsed}
             routes={routes}
             collapse={() => setCollapsed(true)}/>
  </div>
}

export default HeaderBar




