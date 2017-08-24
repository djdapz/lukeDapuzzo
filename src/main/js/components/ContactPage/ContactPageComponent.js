import React, {Component} from 'react';

import style from "../../../style/components/contact.sass";
import Billboard from "../Multipurpose/BillboardComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction"
import HeaderBar from "../Multipurpose/HeaderBarComponent";

const contactInfo = [
    {
        name: "Email",
        value: "luke@dapuzzo.com"
    },
    {
        name: "Phone Number",
        value: "(303) 857-6309"
    }
];

class ContactPage extends Component{

    componentDidMount(){
        this.props.routeChanged(routes.CONTACT)
    }

    renderContactInfo(){
        contactInfo.map(contact  =>  {
            return(
                <div className="contact-row">
                    something
                    <span className="contact-name">
                        {contact.name}:
                    </span>
                    <span className="contact-value">
                        {contact.value}
                    </span>
                </div>
            )
        })

    }

    render() {
        return (

            <div id="contact-page" className="main-content">
                contact page
                {this.renderContactInfo()}
                {this.renderContactInfo()}

            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(ContactPage);






