import React, {Component} from "react";
import {SPOTIFY_ALBUM, SPOTIFY_SONG} from "../../../constants/musicTypes";
import PropTypes from "prop-types";
import MusicRow from "./MusicRow";
import MusicComponent from "../MusicComponent";

class SpotifyRow extends Component {
    getSongsFor(songType) {
        if (this.props.songs === undefined) {
            return []
        }
        return this.props.songs.filter(song => song.type === songType)
    }

    getSongs() {
        return [...this.getSongsFor(SPOTIFY_ALBUM), ...this.getSongsFor(SPOTIFY_SONG)]
    }

    static renderSpotifySong(song) {
        const type = song.type === SPOTIFY_ALBUM ? "album" : "track";
        let s = `https://embed.spotify.com/?uri=spotify:${type}:${song.id}&theme=white`;
        return <MusicComponent url={s} key={song.id}/>
    }

    render() {

        return <MusicRow songs={this.getSongs()} label={"spotify"}
                        renderMethod={SpotifyRow.renderSpotifySong}/>
    }
}


SpotifyRow.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }))
};


export default SpotifyRow;