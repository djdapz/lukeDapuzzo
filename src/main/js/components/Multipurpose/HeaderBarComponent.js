
import React, {Component} from 'react';

import style from "../../../style/components/header.sass";
import {connect} from "react-redux";
import {Link} from "react-router-dom";



class HeaderBar extends Component{

    render() {
        return (
            <div className="header-bar">
                <Link  to="/">
                    <p >
                        Luke D'Apuzzo
                    </p>
                </Link>
            </div>

        )
    }
}


function mapStateToProps(state){
    return{
        route: state.route
    }
}


export default connect(mapStateToProps)(HeaderBar);





