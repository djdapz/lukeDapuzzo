import React, {Component} from "react";

class SpotifyAlbum extends Component {

    render() {
        return (
            <div id="spotifyContainer">
                <iframe className="spotify-song" key={this.props.track.id}
                        src={`https://embed.spotify.com/?uri=spotify:album:${this.props.track.id}&theme=white`}
                        frameBorder="0"
                        allowtransparency="true"
                        width="100%"
                        height="250"/>
            </div>

        )
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default SpotifyAlbum;
