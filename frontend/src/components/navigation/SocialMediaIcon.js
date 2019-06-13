import React, { useState } from "react"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"

const SocialMediaIcon = ({ icon, hoveredColor, defaultColor }) => {
  const [hover, setHover] = useState(false)

  return <div className={"menubar-row"}>
    <a href={icon.href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       target={"_blank"}>
      <FontAwesomeIcon className="social-media-icon"
                       icon={["fab", icon.fontAwesomeName]}
                       color={hover ? hoveredColor : defaultColor}/>
    </a>
  </div>
}

export default SocialMediaIcon





