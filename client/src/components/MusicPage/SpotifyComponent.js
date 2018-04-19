import React, {Component} from "react";

class SpotifyComponent extends Component {

    render() {
        return (
            <div id="spotifyContainer">
                <iframe className="spotify-song" key={this.props.track}
                        src={`https://embed.spotify.com/?uri=${this.props.track}&theme=white`}
                        frameBorder="0"
                        allowtransparency="true"
                        width="100%"
                        height="300"/>
            </div>

        )
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default SpotifyComponent;
