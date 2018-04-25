import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import {getAllSongsAction} from "../../actions/GetAllSongsAction";
import routes from "../../constants/routes";
import SpotifyComponent from "./SpotifyComponent";
import {getAllSongs} from "../../api/SongsApi";
import SoundcloudComponent from "./SoundcloudComponent";

import PropTypes from 'prop-types';


class MusicPage extends Component {

    constructor() {
        super();
        getAllSongs();
    }

    componentDidMount() {
        this.props.routeChanged(routes.MUSIC)
    }

    renderSoundcloudSongs() {
        return this.props.songs.map(song => <SoundcloudComponent key={song.id} song={song}/>)
    }

    render() {
        return (
            <div id="music-page" className="main-content">
                <SpotifyComponent track={"spotify:album:58aKFIYVnNLw5ruYQOPRiv"}/>
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
    return bindActionCreators({routeChanged}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);