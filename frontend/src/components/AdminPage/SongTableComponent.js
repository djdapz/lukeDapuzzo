import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SongRow from "./SongRowComponent";
import {clearDeleteSong} from "../../actions/DeleteSongAction";
import {getAllSongs} from "../../actions/GetAllSongs";
import {SUCCESS} from "../../constants/formStates";
import NewSongForm from "./NewSongForm";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {createSongCleared} from "../../actions/CreateSongAction";

class SongTable extends Component {

    constructor() {
        super();
        this.state = {
            createSong: false
        };
        this.renderSongRows = this.renderSongRows.bind(this);
        this.renderNewButton = this.renderNewButton.bind(this);
    }

    componentDidMount() {
        this.props.getAllSongs();
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.newSongState === SUCCESS) {
            this.props.createSongCleared();
            if (this.state.createSong) {
                this.setState({
                    createSong: false
                })
            }
        }
    }

    renderSongRows() {
        return this.props.songs.map(song => {
            return <SongRow key={song.id} details={song}/>
        })
    }

    reactToSongDeleted() {
        if (this.props.deleteSong.status === 200) {
            getAllSongs();
            this.props.clearDeleteSong();
        }
    }

    render() {
        // this.reactToSongDeleted();
        return (
            <div className="admin-table">
                <h2 className={"table-header"}>
                    Songs
                </h2>
                <hr/>
                <div className="song-listing">
                    <div className="name-column column-header song-column">
                        Song Title
                    </div>
                    <div className=" id-column column-header  song-column">
                        Soundcloud Id
                    </div>
                    <div className={"action-column  song-column"}>
                        {this.renderNewButton()}
                    </div>
                </div>
                {this.state.createSong ?  <NewSongForm/> : null}
                {this.renderSongRows()}
            </div>

        )
    }

    renderNewButton() {
        return this.state.createSong
            ? <button className="btn btn-warning" id={'cancel-button'}
                      onClick={() => this.setState({createSong: false})}>Cancel</button>
            : <button className="btn btn-primary" id={"new-song-button"}
                      onClick={() => this.setState({createSong: true})}>
                <FontAwesomeIcon icon={["fa", "plus"]} />
            </button>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({clearDeleteSong, getAllSongs, createSongCleared}, dispatch)
}

function mapStateToProps(state) {
    return ({
        songs: state.songs,
        newSongState: state.newSong
    });
}

//null means no redux state necessary
export default connect(mapStateToProps, mapDispatchToProps)(SongTable);



