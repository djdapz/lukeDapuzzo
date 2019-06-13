import React from "react"

const MusicComponent = ({ url }) => <div className={`music-container`}>
  <iframe title={`${url}`} className={`music-iframe`}
          src={url}
          frameBorder="0"
          allowTransparency="true"/>
</div>

export default MusicComponent