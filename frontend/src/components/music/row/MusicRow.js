import React from "react"
import {VerticalLabel} from "../../reusable"

const MusicRow = ({label, children}) => <div className={"outer-music-row"}>
    <VerticalLabel label={label}/>
    <div className={"inner-music-row"}>
        {children}
    </div>
</div>

export default MusicRow;