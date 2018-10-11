import React, {Component} from "react";
import {SOUNDCLOUD_SONG} from "../../../constants/musicTypes";
import PropTypes from "prop-types";
import MusicRow from "./MusicRow";
import MusicComponent from "../MusicComponent";

class SoundcloudRow extends Component {
    getSongs() {
        if (this.props.songs === undefined) {
            return []
        }
        return this.props.songs.filter(song => song.type === SOUNDCLOUD_SONG)
    }

    static renderSoundcloudSong(song) {
        const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
        return <MusicComponent url={url} key={song.id}/>
    }

    render() {
        return <MusicRow songs={this.getSongs()} label={"soundcloud"}
                        renderMethod={SoundcloudRow.renderSoundcloudSong}/>
    }
}


SoundcloudRow.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }))
};

export default SoundcloudRow;