import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import routes from "../../constants/routes";
import {routeChanged} from "../../actions/RouteChangedAction";
import SongTable from "./SongTableComponent"
import NewSongForm from "./NewSongForm";
import {getAllSongs} from "../../actions/GetAllSongs";
import {createSongCleared} from "../../actions/CreateSongAction";
import {clearDeleteSong} from "../../actions/DeleteSongAction";
import {musicTypes} from "../../constants/musicTypes";


class AdminPage extends Component {

    constructor() {
        super();
        this.renderTableForAllTypes = this.renderTableForAllTypes.bind(this);
    }

    componentDidMount() {
        this.props.getAllSongs();
        this.props.routeChanged(routes.ADMIN);
    }

    reactToSongDeleted() {
        if (this.props.deleteSong.status === 200) {
            getAllSongs();
            this.props.clearDeleteSong();
        }
    }

    render() {
        return (
            <div id="admin-page" className="main-content">
                <NewSongForm/>
                {this.renderTableForAllTypes()}
            </div>

        )
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
                .filter(songList => {
                    return songList.songs.length > 0
                })
                .map(songList => {
                    return <SongTable songs={songList.songs} type={songList.type}/>
                });
        }

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged, clearDeleteSong, getAllSongs, createSongCleared}, dispatch)
}

function mapStateToProps(state) {
    return ({
        songs: state.songs,
        newSongState: state.newSong
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);


