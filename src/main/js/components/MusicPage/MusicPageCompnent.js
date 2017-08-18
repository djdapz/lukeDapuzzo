import React, {Component} from 'react';

import style from "../../../style/components/music.sass";
import Billboard from "../Multipurpose/BillboardComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction"
import routes from "../../constants/routes";
import HeaderBar from "../Multipurpose/HeaderBarComponent";




class MusicPage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.MUSIC)
    }

    render() {
        return (

            <div id="music-page">
                <HeaderBar header="Music"/>
                {/*<Billboard header="Music Page"/>*/}
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(MusicPage);



