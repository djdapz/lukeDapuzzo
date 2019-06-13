import React from "react"

import { socialMediaIconColors, socialMediaIcons } from "../constants/socialMediaIcons"

import SocialMediaIcon from "./SocialMediaIcon"
import NavButton from "./NavButton"
import { useSelector } from "react-redux"
import routes from "../constants/routes"

const SocialMediaIcons = () =><>
  {socialMediaIcons
    .map(icon => <SocialMediaIcon icon={icon} key={icon.href}
                                  colors={socialMediaIconColors.dropdown}/>)}
</>

const Links = ({ collapse }) => {
  const authenticated = useSelector(state => state.isAuthenticated)

  const shouldDisplayRoute = (route) =>
    route.displayInMenuBar &&
    (!route.isProtected || (route.isProtected && authenticated))

  return <React.Fragment>
    {Object
      .values(routes)
      .map(route =>
        shouldDisplayRoute(route) && <NavButton route={route} collapse={collapse} key={route.name}/>)}
  </React.Fragment>
}

export const Menubar = ({ isCollapsed, collapse }) => {
  const menubarState = isCollapsed ? "menubar-collapsed" : "menubar-expanded"
  return <div className={`menubar ${menubarState}`}>
    <Links collapse={collapse}/>
    <SocialMediaIcons/>
  </div>
}




