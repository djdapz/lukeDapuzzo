import React, {Component} from 'react';

import style from "../../../style/components/live.sass";
import Table from "./TableComponent";
import HeaderBar from "../Multipurpose/HeaderBarComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction"
import routes from "../../constants/routes";


class ShowPage extends Component{
    componentDidMount(){
        this.props.routeChanged(routes.SHOWS)
    }


    render() {
        return (
            <div>
                <HeaderBar header="Show Dates"/>
                <div id="show-page" className="main-content">
                    {/*<BillboardComponent header="Live Dates"/>*/}
                    <Table/>
                </div>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(ShowPage);


