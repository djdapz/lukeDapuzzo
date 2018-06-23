import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import routes from "../../constants/routes";
import SoundcloudComponent from "./SoundcloudComponent";

import PropTypes from 'prop-types';
import {getAllSongs} from "../../actions/GetAllSongs";
import {SOUNDCLOUD_SONG, SPOTIFY_ALBUM, SPOTIFY_SONG} from "../../constants/musicTypes";
import SpotifySong from "./SpotifySong";
import SpotifyAlbum from "./SpotifyAlbum";


class MusicPage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAllSongs();
        this.props.routeChanged(routes.MUSIC)
    }

    renderSoundcloudSongs() {
        if (this.props.songs[SOUNDCLOUD_SONG] !== undefined) {
            return this.props.songs[SOUNDCLOUD_SONG].map(song => <SoundcloudComponent key={song.id} song={song}/>)
        }
    }

    renderSpotifyAlbums() {
        if (this.props.songs[SPOTIFY_ALBUM] !== undefined) {
            return this.props.songs[SPOTIFY_ALBUM].map(song => <SpotifyAlbum key={song.id} track={song}/>)
        }
    }

    renderSpotifySongs() {
        if (this.props.songs[SPOTIFY_SONG] !== undefined) {
            return this.props.songs[SPOTIFY_SONG].map(song => <SpotifySong key={song.id} track={song}/>)
        }
    }

    render() {
        return (
            <div id="music-page" className="main-content">
                {this.renderSpotifyAlbums()}
                {this.renderSpotifySongs()}
                {this.renderSoundcloudSongs()}
            </div>
        )
    }
}

MusicPage.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
};


function mapStateToProps(state) {
    return ({songs: state.songs});
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({routeChanged, getAllSongs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);