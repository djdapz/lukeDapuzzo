import React, {Component} from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction"
import ContactForm from "./ContactFormComponent";

const contactInfo = [
    {
        name: "Email",
        value: "luke@rockstar.com"
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
        return contactInfo.map(contact  =>  {
            return(
                <div className="contactt-row">
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
                <ContactForm/>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({routeChanged}, dispatch)
}

//null means no redux state necessary
export default connect(null , mapDispatchToProps)(ContactPage);






