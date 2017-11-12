import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSong} from "../../actions/CreateSongAction";

const idToken = "-new-song-field";

const EDITING = "EDITING";
const SENDING = "SENDING_SONG";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

class NewSong extends Component {
    constructor() {
        super();

        this.state = {
            song: {
                id: "",
                name: ""
            },
            status: EDITING
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.createSong = this.createSong.bind(this);
        this.renderBasedOnState = this.renderBasedOnState.bind(this);
        this.renderError = this.renderError.bind(this);
    }

    onInputChange(event) {
        const key = event.target.id.replace(idToken, "");
        let nextState = this.state.song;

        nextState[key] = event.target.value;

        this.setState({song: nextState});
    }

    createSong(event) {
        event.preventDefault();
        this.props.createSong(this.state.song);
        this.setState(
            {
                song: {
                    id: "",
                    name: ""
                },
                status: SENDING
            });
        //todo, make the state actually clear after success
        //todo - error handling
    }

    renderBasedOnState() {
        if (this.state.status === SENDING) {
            if (this.props.newSong !== null) {
                if (this.props.newSong.status === 200) {
                    this.setState({
                        status: SUCCESS
                    });
                } else if (this.props.newSong.status >= 300) {
                    this.setState({
                        status: ERROR
                    });
                }
            }
        }

        switch (this.state.status) {
            case EDITING:
                return this.renderForm();
            case SENDING:
                return NewSong.renderSending();
            case ERROR:
                return this.renderError();
        }
    }

    static renderSending() {
        return (
            <span className="row">
                <img className="sendingAnmiation" src="https://s3-us-west-2.amazonaws.com/luke-dapuzzo/gif/loading_icon.gif"/>
            </span>
        )
    }

    renderError() {
        return (
            <tr id={this.props.newSong.data.id} className="form-group">
                <p>
                    ERROR: {this.props.newSong.status}
                </p>
            </tr>
        )
    }


    renderForm() {
        return (
            <div id="new-song-form" className="form-group row">
                <div className="col-md-4 col-sm-2">
                </div>
                <div className="col-md-2 col-sm-4">
                    <input
                        placeholder="Name of Song"
                        type="text"
                        className="form-control"
                        value={this.state.song.name}
                        id={`name${idToken}`}
                        onChange={this.onInputChange}/>
                </div>
                <div className="col-md-2 col-sm-4">
                    <input
                        placeholder="Soundcloud Id"
                        type="text"
                        className="form-control"
                        value={this.state.song.id}
                        id={`id${idToken}`}
                        onChange={this.onInputChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.createSong}>Send It</button>
            </div>
        )
    }

    render() {
        return this.renderBasedOnState()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createSong}, dispatch)
}

function mapStateToProps(state) {
    return ({newSong: state.songs.new});
}

//null means no redux state necessary
export default connect(mapStateToProps, mapDispatchToProps)(NewSong);


