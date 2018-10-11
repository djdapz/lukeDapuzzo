import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import PropTypes from 'prop-types';
import {getAllSongs} from "../../actions/GetAllSongs";
import SpotifyRow from "./row/SpotifyRow";
import SoundcloudRow from "./row/SoundcloudRow";


class MusicPage extends Component {
    render() {
        return (
            <div id="music-page" className="main-content">
                <SpotifyRow songs={this.props.songs}/>
                <SoundcloudRow songs={this.props.songs}/>
            </div>
        )
    }
}

MusicPage.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }))
};


function mapStateToProps(state) {
    return ({songs: state.songs});
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllSongs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);