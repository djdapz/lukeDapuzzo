import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {getAllSongsAction} from "../../actions/GetAllSongsAction";
import SongRow from "./SongRowComponent";
import NewSong from "./NewSongComponent";
import {clearNewSong} from "../../actions/ClearNewSongAction";
import {clearDeleteSong} from "../../actions/DeleteSongAction";

class SongTable extends Component {

    constructor() {
        super();
        this.state = {
            createSong: false
        };

        this.renderCreateSong = this.renderCreateSong.bind(this);
        this.renderSongRows = this.renderSongRows.bind(this);
        this.createSongClicked = this.createSongClicked.bind(this);
        this.cancelSongClicked = this.cancelSongClicked.bind(this);
        this.renderNewButton = this.renderNewButton.bind(this)
    }

    componentDidMount() {
        this.props.getAllSongs();
    }


    createSongClicked() {
        this.setState({createSong: true})
    }

    cancelSongClicked() {
        this.setState({createSong: false})
    }

    renderNewButton() {
        if (this.state.createSong) {
            return (
                <button className="btn btn-warning" onClick={this.cancelSongClicked}>
                    Cancel
                </button>
            )
        } else {
            return (
                <button className="btn btn-primary" onClick={this.createSongClicked}>
                    New Song
                </button>
            )
        }
    }

    renderSongRows() {
        return this.props.songs.map(song => {
            return <SongRow key={song.id} details={song}/>
        })
    }

    renderCreateSong() {
        if (this.state.createSong) {
            return <NewSong/>
        }
    }

    reactToSongCreated() {
        if (this.props.newSong.status === 200) {
            this.setState({createSong: false});
            this.props.getAllSongs();
            this.props.clearNewSong();
        }
    }

    reactToSongDeleted() {
        if (this.props.deleteSong.status === 200) {
            this.props.getAllSongs();
            this.props.clearDeleteSong();
        }
    }

    render() {
        this.reactToSongCreated();
        this.reactToSongDeleted();
        return (
            <div className="live-table">
                <div className="table-header">
                    <h2>
                        Songs

                    </h2>
                    <div className="row header">
                        <div className="col-md-2">
                        </div>
                        <div className="col-sm-2">
                            {this.renderNewButton()}
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 column-header">
                                Song Title
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-5 column-header">
                                Soundcloud Id
                        </div>
                    </div>
                    {this.renderCreateSong()}
                    {this.renderSongRows()}
                </div>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllSongs: getAllSongsAction, clearNewSong, clearDeleteSong}, dispatch)
}

function mapStateToProps(state) {
    return ({
        songs: state.songs.all,
        newSong: state.songs.new,
        deleteSong: state.songs.delete
    });
}

//null means no redux state necessary
export default connect(mapStateToProps, mapDispatchToProps)(SongTable);



