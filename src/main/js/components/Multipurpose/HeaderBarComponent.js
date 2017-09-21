import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class HeaderBar extends Component{
    render() {
        return (
            <div className="header-bar">
                {this.renderHomeLink()}
            </div>

        )
    }

    renderHomeLink() {
        // if(this.props.route.href !== routes.HOME.href){
        //noinspection ConstantIfStatementJS
        if(true){
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





