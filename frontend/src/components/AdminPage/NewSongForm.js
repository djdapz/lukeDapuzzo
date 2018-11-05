import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSong, createSongCleared} from "../../actions/CreateSongAction";
import {FAILED, SUBMITTED} from "../../constants/formStates";


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {musicTypes} from "../../constants/musicTypes";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import Paper from "@material-ui/core/Paper/Paper";

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
        return <Paper id="new-song-form">
            <div className="error-message">
                {this.renderErrorMessage()}
            </div>
            <div className="admin-table">

                <div className="table-header">
                    <FormControl variant="outlined"
                                 color={'secondary'}
                                 id={'music-type-dropdown'}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="music-type-select">
                            Song Type
                        </InputLabel>
                        <Select
                            value={this.state.type}
                            id={"music-type-select"}
                            onChange={(event) => this.setState({type: event.target.value})}
                            input={<OutlinedInput name="type"
                                                  labelWidth={"100rem"}/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {musicTypes.map(type => <MenuItem key={type.api}
                                                              value={type.api}>{type.display}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div className="table-content">
                    <div className={"admin-listing"}>
                        <div className="name-column song-input">
                            <TextField
                                variant="outlined"
                                label="Name of Song"
                                type="text"
                                className="form-control dark-input"
                                value={this.state.name}
                                id={`name-new-song-field`}
                                onChange={(event) => this.setState({name: event.target.value})}/>
                        </div>
                        <div className="id-column song-input">
                            <TextField
                                variant="outlined"
                                label="Song Id"
                                type="text"
                                className="form-control dark-input"
                                value={this.state.id}
                                id={`id-new-song-field`}
                                onChange={(event) => this.setState({id: event.target.value})}/>
                        </div>
                        <div className={"action-column  song-column"}>
                            {this.renderButtonOrSpinnyWheel()}
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    }

    renderButtonOrSpinnyWheel() {
        if (this.props.newSongState === SUBMITTED) {
            return <FontAwesomeIcon id={"loading-wheel"}
                                    icon={["fa", "spinner"]}
                                    pulse/>
        } else {
            return <Button variant="contained"
                           color="primary"
                           className="btn btn-primary"
                           id={"create-song-button"}
                           onClick={this.createSong}>Send
                It</Button>
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


