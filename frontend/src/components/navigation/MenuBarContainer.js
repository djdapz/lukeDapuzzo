import React from "react"

import { socialMediaIconColors, socialMediaIcons } from "../../constants/socialMediaIcons"

import SocialMediaIcon from "./SocialMediaIcon"
import NavButton from "./NavButton"
import { useSelector } from "react-redux"
import routes from "../../constants/routes"
import "./menubar.scss"

const Links = ({ collapse }) => {
  const authenticated = useSelector(state => state.isAuthenticated)

  const shouldDisplayRoute = (route) =>
    route.displayInMenuBar &&
    (!route.isProtected || (route.isProtected && authenticated))

  return <>
    {Object
      .values(routes)
      .map(route =>
        shouldDisplayRoute(route) && <NavButton route={route} collapse={collapse} key={route.name}/>)}
  </>
}

export const Menubar = ({ isCollapsed, collapse }) =>
  <div className={`menubar ${isCollapsed ? "menubar-collapsed" : "menubar-expanded"}`}>
    <Links collapse={collapse}/>
    {socialMediaIcons
      .map(icon => <SocialMediaIcon icon={icon} key={icon.href}
                                    hoveredColor={socialMediaIconColors.dropdown.hovered}
                                    defaultColor={socialMediaIconColors.dropdown.default}/>)}
  </div>




