import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import style from "../../../style/components/bio.sass";
import Billboard from "../Multipurpose/BillboardComponent";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction";
import HeaderBar from "../Multipurpose/HeaderBarComponent";


class BioPage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.BIO);
    }

    render() {
        return (

            <div id="home-page">
                {/*<Billboard header="Bio Page"/>*/}
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(BioPage);

