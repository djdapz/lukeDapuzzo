/**
 * Created by devondapuzzo on 8/24/17.
 */
import React, {Component} from 'react';
import {sendEmail} from "../../actions/SendEmailAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const idToken = '-contact-form';

const EDITING_EMAIL = "EDITING_EMAIL";
const SENDING_EMAIL = "SENDING_EMAIL";
const EMAIL_SUCCESS = "EMAIL_SUCCESS";
const EMAIL_ERROR = "EMAIL_ERROR";


class ContactForm extends Component{
    // noinspection JSUnusedLocalSymbols
    constructor(props){
        super();

        // TODO - THis is really brittle, Would be better with a datastructure of each field,
        // TODO - and create different components based on the type... look into (brought onto by needing to see id field in onInputChanged d

        this.state = {
            email: {
                email: "",
                message: "",
                name: ""
            },
            status: EDITING_EMAIL
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.renderBasedOnState = this.renderBasedOnState.bind(this);
        this.sendAnother = this.sendAnother.bind(this);

    }

    render() {
        return this.renderBasedOnState();
    }

    renderBasedOnState(){
        if(this.state.status === SENDING_EMAIL){
            if(this.props.email !== null) {
                if (this.props.email.status === 200) {
                    this.setState({
                        status: EMAIL_SUCCESS
                    });
                } else if (this.props.email.status >= 300) {
                    this.setState({
                        status: EMAIL_ERROR
                    });
                }
            }
        }

        switch(this.state.status){
            case EDITING_EMAIL:
               return this.renderForm();
            case SENDING_EMAIL:
                return ContactForm.renderSendingEmail();
            case EMAIL_SUCCESS:
                return this.renderEmailSuccess();
            case EMAIL_ERROR:
                return ContactForm.renderEmailError();

        }
    }

    renderEmailSuccess(){
        return(
            <div>
                <h1>
                    Email Sent!
                </h1>
                <button className="btn" onClick={this.sendAnother}>
                    Send Another?
                </button>
            </div>
        )
    }

    static renderEmailError() {
        return(
            <div>
                <h1>
                    Sorry, there was an with sending your email.
                </h1>
                <button className="btn">
                    Try again?
                </button>
            </div>
        )
    }

    static renderSendingEmail() {
        return(
            <div>
                <h1>
                    Sending Email
                    <span>
                        <img src="https://s3-us-west-2.amazonaws.com/luke-dapuzzo/gif/loading_icon.gif"/>
                    </span>
                </h1>
            </div>
        )
    }

    renderForm(){
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


    sendEmail(event){
        event.preventDefault();
        if(this.validateForm()){
            this.props.sendEmail(this.state.email);
            this.setState(
                {
                    email: {
                        email: "",
                        message: "",
                        name: ""
                    },
                    status: SENDING_EMAIL
                });
            //todo, make the state actually clear after success
            //todo - error handling
        }
    }

    validateForm(){
        let issues = {};

        if(!ContactForm.validateEmail(this.state.email.email)){
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
        let key = event.target.id;
        let nextState = this.state.email;

        key = key.replace("-contact-form", "");
        nextState[key]  = event.target.value;

        this.setState({email: nextState});
    }

    static validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    sendAnother(){
        //TODO - clear email reducer!!
        this.setState({
            status: EDITING_EMAIL
        })
    }



}

function mapDispatchToProps(dispatch){
    return bindActionCreators({sendEmail}, dispatch)
}

function mapStateToProps(state){
    return{
        email: state.email
    }
}


//null means no redux state necessary
export default connect(mapStateToProps , mapDispatchToProps)(ContactForm);







