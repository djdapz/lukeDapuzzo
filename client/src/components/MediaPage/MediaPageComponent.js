import React, {Component} from 'react';

import Billboard from "../Multipurpose/BillboardComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction"
import HeaderBar from "../Multipurpose/HeaderBarComponent";




class MediaPage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.MEDIA)
    }


    render() {
        return (

            <div id="home-page">
                {/*<Billboard header="Media Page"/>*/}
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(MediaPage);


