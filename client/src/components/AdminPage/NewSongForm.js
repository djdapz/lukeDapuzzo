import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSong, createSongCleared} from "../../actions/CreateSongAction";
import {FAILED, SUBMITTED, SUCCESS} from "../../constants/formStates";


import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class NewSongForm extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            name: ""
        };

        this.createSong = this.createSong.bind(this);
        this.renderButtonOrSpinnyWheel = this.renderButtonOrSpinnyWheel.bind(this);
    }

    createSong() {
        this.props.createSong({
            id: this.state.id,
            name: this.state.name
        });
    }

    render() {
        return <div id="new-song-form">
            {this.renderErrorMessage()}
            <div className={"song-listing"}>
                <div className="name-column song-input">
                    <input
                        placeholder="Name of Song"
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        id={`name-new-song-field`}
                        onChange={(event) => this.setState({name: event.target.value})}/>
                </div>
                <div className="id-column song-input">
                    <input
                        placeholder="Soundcloud Id"
                        type="text"
                        className="form-control"
                        value={this.state.id}
                        id={`id-new-song-field`}
                        onChange={(event) => this.setState({id: event.target.value})}/>
                </div>
                <h2 className={"action-column  song-column"}>
                    {this.renderButtonOrSpinnyWheel()}
                </h2>
            </div>
        </div>
    }

    renderButtonOrSpinnyWheel() {
        if (this.props.newSongState === SUBMITTED) {
            return <FontAwesomeIcon id={"loading-wheel"} icon={["fa", "spinner"]} pulse/>
        } else {
            return <button className="btn btn-primary" id={"create-song-button"} onClick={this.createSong}>Send
                It</button>
        }
    }

    renderErrorMessage() {
        if (this.props.newSongState === FAILED) {
            return <div className={"song-listing"}>
                <div id={"error-message"}>Creating the new song failed :( try again?</div>
            </div>
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createSong, createSongCleared}, dispatch)
}

function mapStateToProps(state) {
    return ({newSongState: state.newSong});
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSongForm);


