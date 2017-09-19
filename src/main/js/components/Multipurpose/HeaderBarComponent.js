
import React, {Component} from 'react';

import style from "../../../style/components/header.sass";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import routes from "../../constants/routes"



class HeaderBar extends Component{



    render() {
        return (
            <div className="header-bar">
                {this.renderHomeLink()}
            </div>

        )
    }

    renderHomeLink() {
        if(this.props.route.href !== routes.HOME.href){
            return(

                <Link  to="/">
                    <p >
                        Luke D'Apuzzo
                    </p>
                </Link>
            )
        }
    }
}


function mapStateToProps(state){
    return{
        route: state.route
    }
}


export default connect(mapStateToProps)(HeaderBar);





