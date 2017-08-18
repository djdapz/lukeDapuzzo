
import React, {Component} from 'react';

import style from "../../../style/components/header.sass";



class HeaderBar extends Component{

    render() {
        return (

            <div className="header-bar">
                <h1>
                    {this.props.header}
                </h1>
            </div>

        )
    }
}

export default HeaderBar;




