/**
 * Created by devondapuzzo on 8/24/17.
 */
import React, {Component} from 'react';
import {sendEmail} from "../../actions/SendEmailAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const idToken = '-contact-form';

const clearEmail = {
    email: "",
    message: "",
    name: ""
};

class Input extends Component{
    constructor(props){
        super();

        // TODO - THis is really brittle, Would be better with a datastructure of each field,
        // TODO - and create different components based on the type... look into (brought onto by needing to see id field in onInputChanged
        // this.state= {
        //     fields: [
        //         {
        //             name: "email",
        //             type: input,
        //             value: ""
        //         },
        //         {
        //             name: "name",
        //             type: input,
        //             value: ""
        //         },
        //         {
        //             name: "message",
        //             type: "textarea",
        //             value: ""
        //         }
        //     ]
        // }.

        this.state = {
            email: clearEmail
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }


    sendEmail(event){
        event.preventDefault();
        if(this.validateForm()){
            this.props.sendEmail(this.state.email);
            this.setState({email: clearEmail});
            //todo, make the state actually clear after success
            //todo - error handling
        }
    }

    validateForm(){
        let issues = {};

        if(!this.validateEmail(this.state.email.email)){
            issues.email = "Please enter a valid email";
        }

        if(this.state.email.message.length === 0){
            issues.message = "Please write a message";
        }

        if(this.state.email.name.length === 0){
            issues.message = "Please tell us your name";
        }

        if(Object.keys(issues).length === 0) {
            return true
        }else{
            return issues
        }
    }

    onInputChange(event){
        console.log(event);
        let key = event.target.id;
        let nextState = this.state.email;

        key = key.replace("-contact-form", "");
        nextState[key]  = event.target.value;

        this.setState({email: nextState});
    }


    render() {
        return (
            <div id="contact-form" className="form-group">
                <form onSubmit={this.sendEmail}>
                    <input placeholder="Your Name" type="text" className="form-control" value={this.state.email.name} id={`name${idToken}`} onChange={this.onInputChange}/>
                    <input placeholder="Your Email" type="email" className="form-control" value={this.state.email.email} id={`email${idToken}`} onChange={this.onInputChange}/>
                    <textarea placeholder="Your Message" className="form-control" value={this.state.email.message}  id={`message${idToken}`} onChange={this.onInputChange}/>
                    <button className="btn btn-primary">Send It</button>
                </form>
            </div>
        )
    }
}

export default Input;







