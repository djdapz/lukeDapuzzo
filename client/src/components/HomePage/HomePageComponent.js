import React, {Component} from 'react';

import Billboard from "../Multipurpose/BillboardComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction"
import MediaQuery from "react-responsive";

class HomePage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.HOME)
    }

    render() {
        return (
            <div id="home-page">
                <MediaQuery minWidth={776}>
                    <Billboard/>
                </MediaQuery>
                <MediaQuery maxWidth={776}>
                    <Billboard header={"A solo songwriter and musician from Boulder, Colorado"}/>
                </MediaQuery>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(HomePage);





