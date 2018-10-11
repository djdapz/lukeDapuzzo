/**
 * Created by devondapuzzo on 8/24/17.
 */
import React, {Component} from 'react';
import {sendEmail} from "../../actions/SendEmailAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import FontAwesomeIcon from "@fortawesome/react-fontawesome/index.es";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const idToken = '-contact-form';

const EDITING_EMAIL = "EDITING_EMAIL";
const SENDING_EMAIL = "SENDING_EMAIL";
const EMAIL_SUCCESS = "EMAIL_SUCCESS";
const EMAIL_ERROR = "EMAIL_ERROR";


class ContactForm extends Component {
    constructor() {
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
        this.determineState();
        return this.renderFormOrMessageing()
    }

    renderFormOrMessageing() {
        if (this.state.status === EDITING_EMAIL) {
            return this.renderForm();
        } else {
            return <div className={"form-messaging"}>{this.renderBasedOnState()}</div>
        }
    }

    renderBasedOnState() {
        switch (this.state.status) {
            case SENDING_EMAIL:
                return ContactForm.renderSendingEmail();
            case EMAIL_SUCCESS:
                return this.renderEmailSuccess();
            case EMAIL_ERROR:
                return ContactForm.renderEmailError();
            default:
                return ""
        }
    }


    determineState() {
        if (this.state.status === SENDING_EMAIL) {
            if (this.props.email !== null) {
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
    }

    renderEmailSuccess() {
        return (
            <div>
                <h1>
                    Email Sent!
                </h1>
                <hr/>
                <button className="btn" onClick={this.sendAnother}>
                    Send Another?
                </button>
            </div>
        )
    }

    static renderEmailError() {
        return (
            <div>
                <h1>
                    Sorry, there was a problem sending your email.
                </h1>
                <hr/>
                <button className="btn">
                    Try again?
                </button>
            </div>
        )
    }

    static renderSendingEmail() {
        return (<div>
                <h1>
                    Sending Email
                </h1>
                <hr/>
                <span>
                        <FontAwesomeIcon icon={["fa", "spinner"]} pulse size={"2x"}/>
                    </span>
            </div>
        )
    }

    renderForm() {
        return (
            <div id="contact-form" className="form-group">
                <TextField
                    className={'name'}
                    id={`name${idToken}`}
                    label="Your Name"
                    value={this.state.email.name}
                    margin="normal"
                    variant="outlined"
                    onChange={this.onInputChange}
                />
                <TextField
                    className={'email'}
                    id={`email${idToken}`}
                    label="Your Email"
                    type={'email'}
                    value={this.state.email.email}
                    margin="normal"
                    variant="outlined"
                    onChange={this.onInputChange}
                />
                <TextField
                    className={'message'}
                    id={`message${idToken}`}
                    onChange={this.onInputChange}
                    value={this.state.email.message}
                    label="Your Message"
                    multiline
                    rows="10"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" onClick={this.sendEmail}>Send It</Button>
            </div>
        )
    }


    sendEmail(event) {
        event.preventDefault();
        if (this.validateForm()) {
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

    validateForm() {
        return ContactForm.validateEmail(this.state.email.email)
            && (this.state.email.message.length > 0)
            && (this.state.email.name.length > 0)

    }

    onInputChange(event) {
        let key = event.target.id;
        let nextState = this.state.email;

        key = key.replace("-contact-form", "");
        nextState[key] = event.target.value;

        this.setState({email: nextState});
    }

    static validateEmail(email) {
        let re = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/;
        return re.test(email);
    }

    sendAnother() {
        //TODO - clear email reducer!!
        this.setState({
            status: EDITING_EMAIL
        })
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendEmail}, dispatch)
}

function mapStateToProps(state) {
    return {
        email: state.email
    }
}


//null means no redux state necessary
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);







