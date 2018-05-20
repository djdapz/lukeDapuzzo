import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {routeChanged} from "../../actions/RouteChangedAction";
import routes from "../../constants/routes";
import SpotifyComponent from "./SpotifyComponent";
import SoundcloudComponent from "./SoundcloudComponent";

import PropTypes from 'prop-types';
import {getAllSongs} from "../../actions/GetAllSongs";


class MusicPage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAllSongs();
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
    return bindActionCreators({routeChanged, getAllSongs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);