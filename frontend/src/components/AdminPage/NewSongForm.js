import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSong, createSongCleared} from "../../actions/CreateSongAction";
import {FAILED, SUBMITTED} from "../../constants/formStates";


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {musicTypes} from "../../constants/musicTypes";

class NewSongForm extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            name: "",
            type: ""
        };

        this.createSong = this.createSong.bind(this);
        this.renderButtonOrSpinnyWheel = this.renderButtonOrSpinnyWheel.bind(this);
    }

    createSong() {
        this.props.createSong({
            id: this.state.id,
            name: this.state.name,
            type: this.state.type
        });
    }

    render() {
        return <div id="new-song-form">
            <div className="error-message">
                {this.renderErrorMessage()}
            </div>
            <div className="admin-table">

                <div className="table-header">
                    <select className={"form-control"} id={"music-type-select"}
                            onChange={(event) => this.setState({type: event.target.value})}>
                        <option value="" disabled selected>Pick a song type</option>
                        {NewSongForm.renderMusicTypeOptions()}
                    </select>
                </div>
                <div className="table-content">
                    <div className={"admin-listing"}>
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
                                placeholder="Song Id"
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

    static renderMusicTypeOptions() {
        return musicTypes.map(type => <option key={type.api} value={type.api}>{type.display}</option>)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createSong, createSongCleared}, dispatch)
}

function mapStateToProps(state) {
    return ({newSongState: state.newSong});
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSongForm);


