import React, {Component} from 'react';

// noinspection ES6UnusedImports
import style from "../../../style/components/home.sass";
import Billboard from "../Multipurpose/BillboardComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction"

const subtext = "Luke D'Apuzzo is a solo songwriter and musician from Boulder, Colorado.";

class HomePage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.HOME)
    }

    render() {
        return (
            <div id="home-page">
                <Billboard header="Luke D'Apuzzo" subtext={subtext}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(HomePage);





