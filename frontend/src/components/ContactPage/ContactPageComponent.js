import React, {Component} from 'react';
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
    static renderContactInfo(){
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

export default ContactPage;




