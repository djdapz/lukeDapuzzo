
import React, {Component} from 'react';

import style from "../../../style/components/menubar.sass";
import {connect} from "react-redux";

import routes from "../../constants/routes"
import {Link} from "react-router-dom";




class Menubar extends Component{

    renderButtons(){
       return Object.keys(routes).map(key => {

           console.log("here");
           let button = routes[key];
           let rowClassName = "menubar-row";

           if(this.props.route.href === button.href){
               rowClassName += " menubar-active";
           }

           return(
                <Link key={button.name} to={button.href}>
                    <div className={rowClassName}>
                        <p className="menubar-link"> {button.name}</p>
                    </div>
                </Link>
            )
        })
    }

    render() {
        return (

            <div className="menubar-side">
                {this.renderButtons()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        route: state.route
    }
}


export default connect(mapStateToProps)(Menubar);




