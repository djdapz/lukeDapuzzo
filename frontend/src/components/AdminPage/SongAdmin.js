import React, {Component} from "react";
import {getAllSongs} from "../../actions/GetAllSongs";
import {musicTypes} from "../../constants/musicTypes";
import NewSongForm from "./NewSongForm";
import SongTable from "./SongTableComponent";
import {connect} from "react-redux";

class SongAdmin extends Component {
    constructor() {
        super();
        this.renderTableForAllTypes = this.renderTableForAllTypes.bind(this);
    }

    reactToSongDeleted() {
        if (this.props.deleteSong.status === 200) {
            getAllSongs();
            this.props.clearDeleteSong();
        }
    }


    render() {
        return <div>
            < NewSongForm/>
            {this.renderTableForAllTypes()}
        </div>
    }

    renderTableForAllTypes() {
        if (this.props.songs && this.props.songs.length > 0) {
            return musicTypes
                .map(type => {
                    return {
                        "type": type,
                        "songs": this.props.songs.filter(song => song.type === type.api)
                    }
                })
                .filter(songList => songList.songs.length > 0)
                .map(songList => <SongTable songs={songList.songs} type={songList.type}/>);
        }

    }
}

function mapStateToProps(state) {
    return ({
        songs: state.songs
    });
}

export default connect(mapStateToProps)(SongAdmin);

